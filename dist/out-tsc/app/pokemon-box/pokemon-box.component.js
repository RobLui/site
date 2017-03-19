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
var PokemonBoxComponent = (function () {
    function PokemonBoxComponent(EmitterServiceService) {
        this.EmitterServiceService = EmitterServiceService;
    }
    PokemonBoxComponent.prototype.editPokemon = function () {
        EmitterServiceService.get(this.editId).emit(this.pokemon);
    };
    PokemonBoxComponent.prototype.deletePokemon = function (id) {
        var _this = this;
        this.EmitterServiceService.removePokemon(id).subscribe(function (comments) {
            EmitterServiceService.get(_this.listId).emit(comments);
        }, function (err) { console.log(err); });
    };
    return PokemonBoxComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Pokemon)
], PokemonBoxComponent.prototype, "pokemon", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PokemonBoxComponent.prototype, "listId", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PokemonBoxComponent.prototype, "editId", void 0);
PokemonBoxComponent = __decorate([
    Component({
        selector: 'app-pokemon-box',
        templateUrl: './pokemon-box.component.html',
        styleUrls: ['./pokemon-box.component.css']
    }),
    __metadata("design:paramtypes", [EmitterServiceService])
], PokemonBoxComponent);
export { PokemonBoxComponent };
//# sourceMappingURL=../../../../src/app/pokemon-box/pokemon-box.component.js.map