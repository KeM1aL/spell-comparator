import { Component, OnInit, Input } from '@angular/core';
import { CardSelectorService } from './card-selector.service';
import { Card, CardType } from '../shared';


@Component({
  selector: 'app-card-selector',
  templateUrl: './card-selector.component.html',
  styleUrls: ['./card-selector.component.scss'],
  providers: [ CardSelectorService ]
})
export class CardSelectorComponent implements OnInit {
  @Input('type') cardTypes: CardType[];
  cards: Card[];

  constructor(private cardService: CardSelectorService) { }

  ngOnInit() {
    this.getCardList(this.cardTypes);
  }

  getCardList(cardTypes: CardType[]) {
    return this.cardService.getCardList(cardTypes).subscribe(
      data => {
        this.cards = data;
      }
    );
  }
}
