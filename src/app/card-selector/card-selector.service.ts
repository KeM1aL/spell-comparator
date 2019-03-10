import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardService, Card, CardType } from '../shared';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export class SelectableCard {
  card: Card;
  selected: boolean;

  constructor(card: Card) {
    this.card = card;
    this.selected = false;
  }
}


@Injectable({
  providedIn: 'root'
})
export class CardSelectorService {
  constructor(
    private http: HttpClient,
    private cardService: CardService
  ) { }

  getCardList(cardTypes: CardType[]): Observable<SelectableCard[]> {
    return this.cardService.getCardList().pipe(
      map((cards: Card[]) => {
        return  cards.filter(card => cardTypes.indexOf(card.type) !== -1).map(card => new SelectableCard(card));
       })
      );
  }

}
