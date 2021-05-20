import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-filter',
  templateUrl: './data-filter.component.html',
  styleUrls: ['./data-filter.component.scss']
})
export class DataFilterComponent implements OnInit {

  @Input() resultWords: any
  @Output() getLengthWord = new EventEmitter()

  formFilter!: FormGroup
  isChecked: boolean = false //чекбокс по умолчанию не активен
  titleBlock = "Filtered data:" //название блока
  dataSearch: string = "" //ngModel привязанная к полю ввода для поиска слов
  arrayFoundSubString: Array<any> = [] //массив с найденными подстроками

  constructor(
    private formBilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formFilter = this.formBilder.group({
      nameData: ["",
        [
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9]+$")
        ]
      ]
    })
  }

  changeIsChecked() {
    this.isChecked = !this.isChecked;
  }

  lengthWord(itemTitle: { value: string; }) {
    this.getLengthWord.emit(itemTitle)
  }

  searchWord() {

    this.resultWords.data.forEach((item: any) => {
      if(
        this.isChecked === true &&
        this.dataSearch &&
        item.includes(this.dataSearch)
        ) {
          this.arrayFoundSubString.push(item)
          console.log(this.arrayFoundSubString)
      }else if (
        this.isChecked === false &&
        this.dataSearch &&
        item.toLowerCase().includes(this.dataSearch.toLowerCase())
      ) {
          this.arrayFoundSubString.push(item)
          console.log(this.arrayFoundSubString)
      }else {
        return this.resultWords;
      }
    })
    return function clouse(this: any) {
      this.arrayFoundSubString.splice(0, this.arrayFoundSubString.length)
      this.formFilter.reset();//очистка формы
    }
  }


}
