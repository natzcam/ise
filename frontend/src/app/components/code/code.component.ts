import { Component, OnInit, Input } from '@angular/core';
import { fhir } from 'src/app/models/fhir';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {
  @Input()
  code: fhir.CodeableConcept;

  constructor() {}

  ngOnInit() {}
}
