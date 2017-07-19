import {Component} from 'angular2/core';
import {cardService} from "./card.service";
import {OnInit} from "angular2/core";

@Component({

    selector: 'homePage',
    templateUrl: './homePage.component.html',
    providers: [cardService]
})

export class HomePageComponent {

    public cards: any;

    constructor(private cardService: cardService){}

    getCards(){
        this.cards = this.cardService.getCards();

    }

    ngOnInit():any {
        this.getCards();
    }

}
