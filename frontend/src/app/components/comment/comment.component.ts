import { Component, OnInit, Input } from '@angular/core';
import { fhir } from 'src/app/models/fhir';
import * as _ from 'lodash';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  comment: string;
  _observation: fhir.Observation;
  constructor() {}

  ngOnInit() {}

  @Input()
  set observation(observation: fhir.Observation) {
    this._observation = observation;
    this.comment = '';
    const value = _.get(observation, 'valueQuantity.value');
    const ranges = observation.referenceRange;
    if (_.isNumber(value) && _.isArray(ranges)) {
      for (let i = 0; i < ranges.length; i++) {
        const range = ranges[i];
        const low = _.get(range, 'low.value');
        const high = _.get(range, 'high.value');
        if (_.isNumber(low)) {
          if (value < low - low * 0.1) {
            this.comment = 'Critical';
            return;
          } else if (value < low) {
            this.comment = 'Warning';
          }
        }

        if (_.isNumber(high)) {
          if (value > high + high * 0.1) {
            this.comment = 'Critical';
            return;
          } else if (value > high) {
            this.comment = 'Warning';
          }
        }
      }
    }
  }

  get observation(): fhir.Observation {
    return this._observation;
  }
}
