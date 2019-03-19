import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { fhir } from '../models/fhir';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';

class Resource<T> {
  constructor(private type: string, private http: HttpClient) {}

  search(query?: any, headers?: any): Observable<fhir.Bundle> {
    return this.http.get<fhir.Bundle>(
      `${environment.fhir_url}/${this.type}/_search`,
      {
        params: query,
        headers: headers
      }
    );
  }

  // return resources as list, without all the metadata
  resources(query?: any, headers?: any): Observable<T[]> {
    return this.http
      .get<fhir.Bundle>(`${environment.fhir_url}/${this.type}/_search`, {
        params: query,
        headers: headers
      })
      .pipe(
        filter(bundle => bundle.total > 0),
        map((bundle: any) => bundle.entry.map(entry => entry.resource))
      );
  }

  read(id): Observable<T> {
    return this.http.get<T>(`${environment.fhir_url}/${this.type}/${id}`);
  }

  create(resource): Observable<T> {
    if (!resource.resourceType) {
      resource.resourceType = this.type;
    }
    return this.http.post<T>(`${environment.fhir_url}/${this.type}`, resource);
  }
}

@Injectable({
  providedIn: 'root'
})
export class FhirService {
  constructor(private http: HttpClient) {}
  patient = new Resource<fhir.Patient>('Patient', this.http);
  subscription = new Resource<fhir.Subscription>('Subscription', this.http);
  observation = new Resource<fhir.Observation>('Observation', this.http);
}
