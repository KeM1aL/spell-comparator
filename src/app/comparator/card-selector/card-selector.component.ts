import { Component, OnInit, Input } from '@angular/core';
import { CardSelectorService, SelectableCard } from './card-selector.service';
import { Card, CardType } from '../../shared';
import { environment } from '../../../environments/environment';
import { CardComparatorService } from '../card-comparator/card-comparator.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-card-selector',
  templateUrl: './card-selector.component.html',
  styleUrls: ['./card-selector.component.scss'],
  providers: [CardSelectorService]
})
export class CardSelectorComponent implements OnInit {
  @Input() type: CardType[];
  @Input() defaultSelected?: boolean;
  cards: SelectableCard[];

  constructor(
    private cardSelectorService: CardSelectorService,
    private cardComparatorService: CardComparatorService) {

  }

  ngOnInit() {
    if (!this.defaultSelected) {
      this.defaultSelected = false;
    }
    this.getCardList();
  }

  getCardList(): void {
    this.cardSelectorService.getCardList(this.type, this.defaultSelected).subscribe(
      data => {
        this.cards = data.sort((leftCard, rightCard): number =>
          leftCard.data.name.localeCompare(rightCard.data.name)
        );
      }
    );
  }

  notifyUpdateSelectedCards(): void {
    const selectedCards: Card[] = this.cards.filter((card: SelectableCard) => card.selected)
      .map((card: SelectableCard) => card.data);
    this.cardComparatorService.selectedSpells.next(selectedCards);
  }

  toggleSelection(card: SelectableCard): void {
    card.selected = !card.selected;
    this.notifyUpdateSelectedCards();
  }
}
