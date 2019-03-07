import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardSelectorService {

  constructor(private http: HttpClient) { }
  url = environment.apiServer;

}
