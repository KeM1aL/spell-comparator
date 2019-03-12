import { Component, OnInit, Input } from '@angular/core';
import { CardSelectorService, SelectableCard } from './card-selector.service';
import { Card, CardType } from '../shared';


@Component({
  selector: 'app-card-selector',
  templateUrl: './card-selector.component.html',
  styleUrls: ['./card-selector.component.scss'],
  providers: [ CardSelectorService ]
})
export class CardSelectorComponent implements OnInit {
  @Input() type: CardType[];
  cards: SelectableCard[];

  constructor(private cardSelectorService: CardSelectorService) { }

  ngOnInit() {
    this.getCardList();
  }

  getCardList(): void {
    this.cardSelectorService.getCardList(this.type).subscribe(
      data => {
        this.cards = data;
      }
    );
  }

  toggleSelection(card: SelectableCard): void {
    card.selected = !card.selected;
  }
}
