import { Component, OnInit, Input } from '@angular/core';
import { Card, CardType, CardService } from '../../shared';
import { environment } from '../../../environments/environment';
import { CardComparatorService } from '../card-comparator/card-comparator.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-card-selector',
  templateUrl: './card-selector.component.html',
  styleUrls: ['./card-selector.component.scss']
})
export class CardSelectorComponent implements OnInit {
  @Input() type: CardType[];
  @Input() defaultSelected?: boolean;
  cards: Card[];
  selection: Map<string, boolean>;

  constructor(
    private cardService: CardService,
    private cardComparatorService: CardComparatorService) {

  }

  ngOnInit() {
    if (!this.defaultSelected) {
      this.defaultSelected = false;
    }
    this.selection = new Map();
    this._initCardList();
  }

  private _initCardList(): void {
    this.cardService.getCardList().subscribe(
      data => {
        this.cards = data.filter(card => this.type.indexOf(card.type) !== -1).sort((leftCard, rightCard): number =>
          leftCard.name.localeCompare(rightCard.name)
        );
        this.cards.forEach(card => this.selection.set(card.name, this.defaultSelected));
      }
    );
  }

  notifyUpdateSelectedCards(): void {

  }

  isSelected(card: Card): boolean {
    return this.selection.get(card.name);
  }

  toggleSelection(card: Card): void {
    const selected: boolean = !this.isSelected(card);
    this.selection.set(card.name, selected);

    this.notifyUpdateSelectedCards();
  }
}
