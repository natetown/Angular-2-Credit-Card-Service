
import {Injectable} from "angular2/core";
import {cards} from "./cards";
@Injectable(
) //tells Angular that classes are injectable into other classes.
export class cardService{

getCards() {
   return cards;
}
}