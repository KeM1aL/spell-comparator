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
  damage: number;
}

export class SpellCard extends Card {
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
  constructor() {
    super();
    this.type = CardType.Troop;
  }
}

export class BuildingCard extends Card  {
  hitpoints: number;
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
    let card = null;
    if (item.type === CardType.Spell) {
      card = new SpellCard();
      card.duration = item.duration;
      card.crown_tower_damage = item.crown_tower_damage;
      card.target = item.target;
    } else if (item.type === CardType.Building) {
      card = new BuildingCard();
      card.hitpoints = item.hitpoints;
    } else if (item.type === CardType.Troop) {
      card = new TroopCard();
      card.hitpoints = item.hitpoints;
      card.location = item.location;
      card.shield = item.shield;
    } else {
      throw new AdapterMappingError("Invalid card type " + item.type, "type");
    }
    card.name = item.name;
    card.key = item.key;
    card.rarity = item.rarity;
    card.description = item.description;
    card.elixir = item.elixir;
    card.damage = item.damage;
    return card;
  }
}