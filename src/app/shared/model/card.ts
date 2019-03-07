export interface Card {
  name: string;
  rarity: string;
  hitpoints: number;
  name_fr: string;
  key: string;
  elixir: number;
  type: string;
  description: string;
  location: string;
  shield?: number;
  damage: any;
}

export interface SpellCard {
  name: string;
  name_fr: string;
  rarity: string;
  damage: number;
  duration: number;
  crown_tower_damage: number;
  key: string;
  elixir: number;
  type: string;
  description: string;
  target: string;
}
