import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Card, CardType, CardAdapter } from '../shared/model/card.model'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpDataWrapper } from '../core';

@Injectable({
  providedIn: 'root'
})
export class CardSelectorService {
  baseUrl = environment.apiServer;
  constructor(
    private http: HttpClient,
    private adapter: CardAdapter,
    ) { }

  getCardList(cardTypes: CardType[]): Observable<Card[]> {
    const url = `${this.baseUrl}/resources/troops.json`;
    return this.http.get<HttpDataWrapper<any>>(url).pipe(
      map((result: HttpDataWrapper<any>) => {
       return  result.data.map(item => this.adapter.adapt(item))
      })
    );
  }

}
