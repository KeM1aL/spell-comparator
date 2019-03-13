import { Injectable } from '@angular/core';
import { Adapter, AdapterMappingError } from 'src/app/core';

export class CardRarity {
  name: string;
  levelCount: number;
  relativeLevel: number;
  balanceMultiplier: number;
  powerLevelMultiplier: number[];
}

@Injectable({
  providedIn: 'root'
})
export class CardRarityAdapter implements Adapter<CardRarity> {

  adapt(item: any): CardRarity {
    const rarity: CardRarity = new CardRarity();
    rarity.name = item.name;
    rarity.levelCount = item.level_count;
    rarity.relativeLevel = item.relative_level;
    rarity.balanceMultiplier = item.balance_multiplier;
    rarity.powerLevelMultiplier = item.power_level_multiplier;
    return rarity;
  }
}
