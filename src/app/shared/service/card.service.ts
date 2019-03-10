import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Card, CardType, CardAdapter } from '../model/card.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpDataWrapper } from '../../core';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  baseUrl = environment.apiServer;
  constructor(
    private http: HttpClient,
    private adapter: CardAdapter,
    ) { }

  getCardList(): Observable<Card[]> {
    const troopUrl = `${this.baseUrl}/resources/troops.json`;
    const spellUrl = `${this.baseUrl}/resources/spells.json`;
    return this.http.get<HttpDataWrapper<any>>(spellUrl).pipe(
      map((result: HttpDataWrapper<any>) => {
       return  result.data.map(item => this.adapter.adapt(item));
      })
    );
  }

}
