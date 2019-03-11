import { Component, OnInit } from '@angular/core';
import { CardType } from '../../shared';

@Component({
  selector: 'app-comparator',
  templateUrl: './web-comparator.component.html',
  styleUrls: ['./web-comparator.component.scss']
})
export class WebComparatorComponent implements OnInit {
  spellCardType: CardType[];
  troopCardType: CardType[];

  constructor() { }

  ngOnInit() {
    this.spellCardType = [CardType.Spell];
    this.troopCardType = [CardType.Troop, CardType.Building];
  }

}
