import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Card, CardType, CardAdapter, CardRarity, CardRarityAdapter } from '../model';
import { Observable, forkJoin, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpDataWrapper } from '../../core';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  cards: Card[];
  rarities: Map<string, CardRarity>;
  baseUrl = environment.apiServer;

  constructor(
    private http: HttpClient,
    private cardAdapter: CardAdapter,
    private rarityAdapter: CardRarityAdapter
  ) { }

  loadCardList(): Promise<any> {
    const promise: Promise<any>  = new Promise((resolve, reject) => {
      this._loadRarityList().subscribe(rarities => {
        forkJoin(this._loadSpellList(), this._loadTroopList()).pipe(
          tap(results => {
            this.cards = results[0].concat(results[1]);
          })
        ).subscribe(cards => resolve());
      });
    });
    return promise;
  }

  private _loadRarityList(): Observable<CardRarity[]> {
    const rarityUrl = `${this.baseUrl}/resources/rarities.json`;
    return this.http.get<HttpDataWrapper<any>>(rarityUrl).pipe(
      map((result: HttpDataWrapper<any>) => {
        return result.data.map(item => this.rarityAdapter.adapt(item));
      }),
      tap(rarities => {
        this.rarities = new Map();
        rarities.forEach(rarity => {
          this.rarities.set(rarity.name, rarity);
        });
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


  getCardList(): Observable<Card[]> {
    return of(this.cards);
  }

  getRarity(name: string): CardRarity {
    return this.rarities.get(name);
  }

}
