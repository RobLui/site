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
import { Pokemon } from '../model/pokemon';
var PokemonFormComponent = (function () {
    function PokemonFormComponent(EmitterServiceService) {
        this.EmitterServiceService = EmitterServiceService;
        this.model = new Pokemon(new Date(), '', '');
        this.editing = false;
    }
    PokemonFormComponent.prototype.submitPokemon = function () {
        var _this = this;
        var pokemonOperation;
        if (!this.editing) {
            pokemonOperation = this.EmitterServiceService.addPokemon(this.model);
        }
        else {
            pokemonOperation = this.EmitterServiceService.updatePokemon(this.model);
        }
        pokemonOperation.subscribe(function (comments) {
            EmitterServiceService.get(_this.listId).emit(Pokemon);
            _this.model = new Pokemon(new Date(), '', '');
            if (_this.editing)
                _this.editing = !_this.editing;
        }, function (err) {
            console.log(err);
        });
    };
    PokemonFormComponent.prototype.ngOnChanges = function () {
        var _this = this;
        EmitterServiceService.get(this.editId).subscribe(function (pokemon) {
            _this.model = pokemon;
            _this.editing = true;
        });
    };
    return PokemonFormComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], PokemonFormComponent.prototype, "editId", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PokemonFormComponent.prototype, "listId", void 0);
PokemonFormComponent = __decorate([
    Component({
        selector: 'app-pokemon-form',
        templateUrl: './pokemon-form.component.html',
        styleUrls: ['./pokemon-form.component.css']
    }),
    __metadata("design:paramtypes", [EmitterServiceService])
], PokemonFormComponent);
export { PokemonFormComponent };
//# sourceMappingURL=../../../../src/app/pokemon-form/pokemon-form.component.js.map