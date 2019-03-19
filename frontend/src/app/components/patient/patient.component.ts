import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iif, Observable, of } from 'rxjs';
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
  websocket$ = webSocket({
    url: environment.fhir_ws_url,
    serializer: (value: string) => value,
    deserializer: (e: MessageEvent) => e.data
  });

  constructor(route: ActivatedRoute, private fhirService: FhirService) {
    this.patient$ = route.params.pipe(
      switchMap(params => fhirService.patient.read(params.id))
    );

    this.observations$ = route.params.pipe(
      switchMap(params =>
        fhirService.observation.resources({
          subject: 'Patient/' + params.id
        })
      )
    );

    // find subscription for the patient, if none, then create one
    this.subscription$ = route.params.pipe(
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
          () => {
            console.log(
              result[1] === null ? 'No sub, creating one' : 'Already has a sub'
            );
            return result[1] === null;
          },
          fhirService.subscription.create({
            criteria: 'Observation?subject=Patient/' + result[0],
            status: 'active',
            channel: {
              type: 'websocket'
            }
          }),
          of(result[1])
        )
      )
    );

    this.subscription$.subscribe(sub => {
      console.log('subscribe to subcription: ' + sub.id);
      this.websocket$.next('bind ' + sub.id);
    });

    this.websocket$.subscribe(
      msg => console.log('message received: ' + msg), // Called whenever there is a message from the server.
      err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
      () => console.log('complete') // Called when connection is closed (for whatever reason).
    );

    // route.params.pipe(tap(params => );
  }

  ngOnInit() {}
}
