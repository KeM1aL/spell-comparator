import { CardService } from '../service';

export function loadCards(cardService: CardService) {
  return () => cardService.loadCardList();
}
