import { Component, OnInit } from '@angular/core';
import { CardType } from '../shared';

@Component({
  selector: 'app-comparator',
  templateUrl: './comparator.component.html',
  styleUrls: ['./comparator.component.scss']
})
export class ComparatorComponent implements OnInit {
  spellCardType: CardType[];
  troopCardType: CardType[];

  constructor() { }

  ngOnInit() {
    this.spellCardType = [CardType.Spell];
    this.troopCardType = [CardType.Troop, CardType.Building];
  }

}
