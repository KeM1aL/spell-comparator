import { Component, OnInit, Input } from '@angular/core';
import { CardSelectorService, SelectableCard } from './card-selector.service';
import { Card, CardType } from '../shared';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-card-selector',
  templateUrl: './card-selector.component.html',
  styleUrls: ['./card-selector.component.scss'],
  providers: [ CardSelectorService ]
})
export class CardSelectorComponent implements OnInit {
  @Input() type: CardType[];
  @Input('selected') defaultSelected?: boolean;
  cards: SelectableCard[];
  imgBaseUrl = `${environment.apiServer}/resources/CardsWithElixir/`;

  constructor(private cardSelectorService: CardSelectorService) { }

  ngOnInit() {
    if(!this.defaultSelected) {
      this.defaultSelected = false;
    }
    this.getCardList();
  }

  getCardList(): void {
    this.cardSelectorService.getCardList(this.type, this.defaultSelected).subscribe(
      data => {
        this.cards = data.sort((leftCard, rightCard): number => {
          if (leftCard.data.name < rightCard.data.name)
          return -1;
        if (leftCard.data.name > rightCard.data.name)
          return 1;
        return 0;
        });
      }
    );
  }

  toggleSelection(card: SelectableCard): void {
    card.selected = !card.selected;
  }
}
