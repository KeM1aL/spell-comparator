import { Injectable } from '@angular/core';
import { Adapter, AdapterMappingError } from 'src/app/core';

export enum CardType {
  Building = "Building",
  Troop = "Troop",
  Spell = "Spell"
}

export class Card {
  name: string;
  key: string;
  rarity: string;
  type: CardType;
  description: string;
  elixir: number;
}

export class SpellCard extends Card {
  damage: number;
  duration: number;
  crown_tower_damage: number;
  target: string;
  constructor() {
    super();
    this.type = CardType.Spell;
  }
}

export class TroopCard extends Card {
  hitpoints: number;
  location: string;
  shield?: number;
  damage: any;
  constructor() {
    super();
    this.type = CardType.Troop;
  }
}

export class BuildingCard extends TroopCard {
  constructor() {
    super();
    this.type = CardType.Building;
  }
}

@Injectable({
  providedIn: 'root'
})
export class CardAdapter implements Adapter<Card> {

  adapt(item: any): Card {
    if (item.type === CardType.Spell) {
      return new SpellCard();
    } else if (item.type === CardType.Building) {
      return new BuildingCard();
    } else if (item.type === CardType.Troop) {
      return new TroopCard();
    }
    throw new AdapterMappingError("Invalid card type " + item.type, "type");
  }
}