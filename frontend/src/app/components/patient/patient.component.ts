import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iif, Observable, of, merge } from 'rxjs';
import { map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { fhir } from 'src/app/models/fhir';
import { FhirService } from 'src/app/services/fhir.service';
import { environment } from 'src/environments/environment';
import { webSocket } from 'rxjs/webSocket';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  patient$: Observable<fhir.Patient>;
  subscription$: Observable<fhir.Subscription>;
  observations$: Observable<fhir.Observation[]>;

  constructor(private route: ActivatedRoute, private fhirService: FhirService) {
    this.patient$ = route.params.pipe(
      switchMap(params => fhirService.patient.read(params.id))
    );

    // triggered when patient id changes
    const patientIdChanged$ = route.params;

    // triggered when websocket ping is received from a subscription
    // https://www.hl7.org/fhir/subscription.html#2.46.7.2
    const webSocketPing$ = route.params.pipe(
      // find subscription for the patient
      switchMap(params =>
        fhirService.subscription
          .search(
            {
              criteria: 'Observation?subject=Patient/' + params.id
            },
            { 'Cache-Control': 'no-cache' }
          )
          .pipe(
            map(bundle => [
              params.id,
              bundle.total === 0 ? null : bundle.entry[0].resource
            ])
          )
      ),
      mergeMap(result =>
        iif(
          () => result[1] === null,
          // if none, then create one
          fhirService.subscription.create({
            criteria: 'Observation?subject=Patient/' + result[0],
            status: 'active',
            reason: 'test',
            channel: {
              type: 'websocket',
              payload: 'application/json'
            }
          }),
          of(result[1])
        )
      ),
      switchMap(sub => {
        const websocket$ = webSocket({
          url: environment.fhir_ws_url,
          serializer: (value: string) => value,
          deserializer: (e: MessageEvent) => e.data
        });
        websocket$.next('bind ' + sub.id);
        return websocket$;
      })
    );

    this.observations$ = merge(patientIdChanged$, webSocketPing$).pipe(
      switchMap(_ =>
        fhirService.observation.resources(
          {
            subject: 'Patient/' + route.snapshot.params.id
          },
          { 'Cache-Control': 'no-cache' }
        )
      )
    );
  }

  ngOnInit() {}
}
