import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Card, CardType, CardAdapter, CardRarity, CardRarityAdapter } from '../model';
import { Observable, forkJoin } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpDataWrapper } from '../../core';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  cards: Card[];
  rarities: CardRarity[];
  baseUrl = environment.apiServer;

  constructor(
    private http: HttpClient,
    private cardAdapter: CardAdapter,
    private rarityAdapter: CardRarityAdapter
  ) { }

  loadRarityList(): Promise<any> {
    return this._loadRarityList().pipe(
      tap(rarities => {
        this.rarities = rarities;
      })
    ).toPromise();
  }

  loadCardList(): Promise<any> {
    return forkJoin(this._loadSpellList(), this._loadTroopList()).pipe(
      tap(results => {
        this.cards = results[0].concat(results[1]);
      })
    ).toPromise();
  }

  private _loadRarityList(): Observable<CardRarity[]> {
    const rarityUrl = `${this.baseUrl}/resources/rarities.json`;
    return this.http.get<HttpDataWrapper<any>>(rarityUrl).pipe(
      map((result: HttpDataWrapper<any>) => {
        return result.data.map(item => this.rarityAdapter.adapt(item));
      })
    );
  }

  private _loadSpellList(): Observable<Card[]> {
    const spellUrl = `${this.baseUrl}/resources/spells.json`;
    return this.http.get<HttpDataWrapper<any>>(spellUrl).pipe(
      map((result: HttpDataWrapper<any>) => {
        return result.data.map(item => this.cardAdapter.adapt(item));
      })
    );
  }

  private _loadTroopList(): Observable<Card[]> {
    const spellUrl = `${this.baseUrl}/resources/troops.json`;
    return this.http.get<HttpDataWrapper<any>>(spellUrl).pipe(
      map((result: HttpDataWrapper<any>) => {
        return result.data.map(item => this.cardAdapter.adapt(item));
      })
    );
  }


  getCardList(): Card[] {
    return this.cards;
  }

  getRarities(): CardRarity[] {
    return this.rarities;
  }

}
