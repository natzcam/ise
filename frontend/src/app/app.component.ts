import { Component } from '@angular/core';
import { fhir } from './models/fhir';
import { Observable } from 'rxjs';
import { FhirService } from './services/fhir.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  patients: Observable<fhir.Patient[]>;

  constructor(fhirService: FhirService) {
    this.patients = fhirService.patient.resources();
  }
}
