import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { fhir } from 'src/app/models/fhir';

@Component({
  selector: 'app-observation',
  templateUrl: './observation.component.html',
  styleUrls: ['./observation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ObservationComponent implements OnInit {
  private _observation: fhir.Observation;
  component: fhir.BackboneElement[];

  constructor() {}

  @Input()
  set observation(value: fhir.Observation) {
    this._observation = value;
    this.component = value.component ? value.component : [value];
  }

  get observation(): fhir.Observation {
    return this._observation;
  }

  ngOnInit() {}
}
