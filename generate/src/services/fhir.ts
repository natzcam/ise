import axios, {AxiosPromise} from 'axios'

import {fhir} from './model'

const url = 'http://localhost:8888/fhir'

class Resource<T> {
  constructor(private readonly type: string) {}

  search(query?: any, headers?: any): AxiosPromise<fhir.Bundle> {
    return axios.get<fhir.Bundle>(`${url}/${this.type}`, {
      params: query,
      headers
    })
  }

  // return resources as list, without all the metadata
  async resources(query?: any, headers?: any): Promise<T[]> {
    const bundle: any = await axios.get<fhir.Bundle>(
      `${url}/${this.type}/_search`,
      {
        params: query,
        headers
      }
    )
    if (bundle.total === 0 || !bundle.entry) {
      return []
    } else {
      return bundle.entry.map((entry: any) => entry.resource)
    }
  }

  read(id: any): AxiosPromise<T> {
    return axios.get<T>(`${url}/${this.type}/${id}`)
  }

  create(resource: any): AxiosPromise<T> {
    if (!resource.resourceType) {
      resource.resourceType = this.type
    }
    return axios.post<T>(`${url}/${this.type}`, resource)
  }
}

export const patient = new Resource<fhir.Patient>('Patient')
export const subscription = new Resource<fhir.Subscription>('Subscription')
export const observation = new Resource<fhir.Observation>('Observation')
