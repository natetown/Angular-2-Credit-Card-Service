/**
 * Created by nw53497 on 3/7/2017.
 */
"use strict";
import {Component} from "angular2/core";
import {cardService} from "./card.service";
import {OnInit} from "angular2/core";

@Component({
    selector: 'cardlist',
    templateUrl: 'cardlist.component.html',
    providers: [cardService]
})

export class CardListComponent implements OnInit{
    public cards: any;

    constructor(private cardService: cardService){}

    getCards(){
       this.cards = this.cardService.getCards();

    }

    ngOnInit():any {
    this.getCards();
    }
}