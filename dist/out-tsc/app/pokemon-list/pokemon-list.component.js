var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { EmitterServiceService } from '../emitter-service.service';
var PokemonListComponent = (function () {
    function PokemonListComponent(EmitterServiceService) {
        this.EmitterServiceService = EmitterServiceService;
    }
    PokemonListComponent.prototype.loadPokemon = function () {
        var _this = this;
        this.EmitterServiceService.getPokemon()
            .subscribe(function (pokemon) { return _this.pokemon = pokemon; }, function (err) {
            console.log(err);
        });
    };
    PokemonListComponent.prototype.ngOnInit = function () {
        this.loadPokemon();
    };
    PokemonListComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        EmitterServiceService.get(this.listId).subscribe(function (pokemon) { _this.pokemon = pokemon; });
    };
    return PokemonListComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], PokemonListComponent.prototype, "listId", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PokemonListComponent.prototype, "editId", void 0);
PokemonListComponent = __decorate([
    Component({
        selector: 'app-pokemon-list',
        templateUrl: './pokemon-list.component.html',
        styleUrls: ['./pokemon-list.component.css']
    }),
    __metadata("design:paramtypes", [EmitterServiceService])
], PokemonListComponent);
export { PokemonListComponent };
//# sourceMappingURL=../../../../src/app/pokemon-list/pokemon-list.component.js.map