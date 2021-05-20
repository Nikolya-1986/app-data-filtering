import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataUrl: string = "http://www.mrsoft.by/data.json"

  constructor(private httpClient: HttpClient) { }

  addData() {//инициализация стрима просходит в сервисе а подписка уже в компоненте
    return this.httpClient.get(`${this.dataUrl}`)
  }
}
