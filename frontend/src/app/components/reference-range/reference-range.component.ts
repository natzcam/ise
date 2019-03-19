import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reference-range',
  templateUrl: './reference-range.component.html',
  styleUrls: ['./reference-range.component.scss']
})
export class ReferenceRangeComponent implements OnInit {
  _range: any;
  text;
  rangeText;
  ageText;

  constructor() {}

  @Input()
  set range(range: any) {
    this._range = range;
    this.text = range.text;
    this.rangeText = this.constructRangeText(range);

    if (range.age) {
      this.ageText = this.constructRangeText(range.age);
    }
  }

  get range(): any {
    return this._range;
  }

  constructRangeText(range) {
    return [
      range.low ? range.low.value : null,
      range.high ? range.high.value : null
    ]
      .filter(val => val !== null)
      .join(' - ');
  }

  ngOnInit() {}
}
