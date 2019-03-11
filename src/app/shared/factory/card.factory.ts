import { CardService } from '../service';

export function loadCards(cardService: CardService) {
  return () => cardService.loadCardList();
}

export function loadRarities(cardService: CardService) {
  return () => cardService.loadRarityList();
}
