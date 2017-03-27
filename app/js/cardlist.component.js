System.register(["angular2/core", "./card.service"], function(exports_1, context_1) {
    /**
     * Created by nw53497 on 3/7/2017.
     */
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, card_service_1;
    var CardListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (card_service_1_1) {
                card_service_1 = card_service_1_1;
            }],
        execute: function() {
            CardListComponent = (function () {
                function CardListComponent(cardService) {
                    this.cardService = cardService;
                }
                CardListComponent.prototype.getCards = function () {
                    this.cards = this.cardService.getCards();
                };
                CardListComponent.prototype.ngOnInit = function () {
                    this.getCards();
                };
                CardListComponent = __decorate([
                    core_1.Component({
                        selector: 'cardlist',
                        templateUrl: 'cardlist.component.html',
                        providers: [card_service_1.cardService]
                    }), 
                    __metadata('design:paramtypes', [card_service_1.cardService])
                ], CardListComponent);
                return CardListComponent;
            }());
            exports_1("CardListComponent", CardListComponent);
        }
    }
});
//# sourceMappingURL=cardlist.component.js.map