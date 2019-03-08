import { Component, OnInit } from '@angular/core';
import { CardSelectorService } from './card-selector.service';
import { Card } from '../shared';


@Component({
  selector: 'app-card-selector',
  templateUrl: './card-selector.component.html',
  styleUrls: ['./card-selector.component.scss'],
  providers: [ CardSelectorService ]
})
export class CardSelectorComponent implements OnInit {
  cards: Card[];

  constructor(private cardService: CardSelectorService) { }

  ngOnInit() {
    this.getCardList();
  }

  getCardList() {
    this.cardService.getCardList().subscribe(
      data => {
        this.cards = data;
      }
    );
  }
}
