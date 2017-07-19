/**
 * Created by nw53497 on 3/7/2017.
 */
import {Component} from '@angular/core';
import {CardService} from './card.service';
import {OnInit} from '@angular/core';

@Component({
    selector: 'app-card-list',
    templateUrl: './cardlist.component.html',
    providers: [CardService]
})

export class CardListComponent implements OnInit {
    public cards: any;

    constructor(private cardService: CardService) {}

    getCards() {
       this.cards = this.cardService.getCards();

    }

    ngOnInit(): any {
    this.getCards();
    }
}
