import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() selection?: EventEmitter<Card[]> = new EventEmitter<Card[]>();
  cards: Card[];
  selectedKeys: Map<string, boolean>;

  constructor(
    private cardService: CardService,
    private cardComparatorService: CardComparatorService) {

  }

  ngOnInit() {
    if (!this.defaultSelected) {
      this.defaultSelected = false;
    }
    this.selectedKeys = new Map();
    this._initCardList();
  }

  private _initCardList(): void {
    this.cardService.getCardList().subscribe(
      data => {
        this.cards = data.filter(card => this.type.indexOf(card.type) !== -1).sort((leftCard, rightCard): number =>
          leftCard.name.localeCompare(rightCard.name)
        );
        this.cards.forEach(card => this.selectedKeys.set(card.key, this.defaultSelected));
      }
    );
  }

  isSelected(card: Card): boolean {
    return this.selectedKeys.get(card.key);
  }

  toggleSelection(card: Card): void {
    const selected: boolean = !this.isSelected(card);
    this.selectedKeys.set(card.key, selected);
  }
}
