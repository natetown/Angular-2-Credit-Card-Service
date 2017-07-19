
import {Injectable} from '@angular/core';
import {cards} from './cards';
@Injectable(
)
export class CardService {

getCards() {
   return cards;
}
}
