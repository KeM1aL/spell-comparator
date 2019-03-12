import { Injectable } from '@angular/core';
import { CardService, Card, CardRarity } from '../../shared';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardComparatorService {
  selectedSpells: BehaviorSubject<Card[]>;
  selectedTroops: BehaviorSubject<Card[]>;
  selectedBuildings: BehaviorSubject<Card[]>;

  constructor(
    private cardService: CardService
  ) {
    this.selectedSpells = new BehaviorSubject([]);
    this.selectedTroops = new BehaviorSubject([]);
    this.selectedBuildings = new BehaviorSubject([]);
  }

}
