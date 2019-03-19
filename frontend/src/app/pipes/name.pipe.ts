import { Pipe, PipeTransform } from '@angular/core';
import { fhir } from '../models/fhir';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {
  transform(patient: fhir.Patient, args?: any): any {
    const name: fhir.HumanName = patient.name[0];
    return name.family + ', ' + name.given.join(' ');
  }
}
