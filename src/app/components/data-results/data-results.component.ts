import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-results',
  templateUrl: './data-results.component.html',
  styleUrls: ['./data-results.component.scss']
})
export class DataResultsComponent implements OnInit {

  @Input() arrayFoundSubString!: Array<any>
  @Input() dataSearch!: string

  constructor() { }

  ngOnInit(): void {
  }

}
