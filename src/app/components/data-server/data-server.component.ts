import { Component, Input, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-data-server',
  templateUrl: './data-server.component.html',
  styleUrls: ['./data-server.component.scss']
})
export class DataServerComponent implements OnInit {

  titleBlock = "Data from the server"
  resultWords: any //Слова которые получены с сервера
  arrayOfLongerLength: Array<any> = []//массив со словами длиной больше указанной

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getAddData()
  }

  getAddData() {
    this.dataService.addData().subscribe(data => {
      this.resultWords = data
      console.log(this.resultWords)
      }
    )
  }

  getLengthWord(itemTitle: any) {

    for(let key of this.resultWords.data) {
      if(
        itemTitle.value.length > 0 &&
        key.length == itemTitle.value ||
        key.length > itemTitle.value
        ) {
          this.arrayOfLongerLength.push(key)
          console.log(this.arrayOfLongerLength)
      }
    }
  }
}
