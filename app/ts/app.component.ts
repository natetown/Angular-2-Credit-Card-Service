///<reference path="cardlist.component.ts"/>
import {Component} from 'angular2/core';
import {Config} from './config.service';
import {CardListComponent} from './cardlist.component';
import {cardService} from './card.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    directives: [CardListComponent]
})
export class AppComponent {
    mainHeading = Config.MAIN_HEADING;
    constructor(){
    console.log("Done");
    }
}
