import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Data} from './data'

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private REST_API_SERVER = "http://localhost:8000/util";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(): Observable<Data[]>{
    return this.httpClient.get<Data[]>(this.REST_API_SERVER);
  }
}