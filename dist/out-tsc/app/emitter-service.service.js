var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
var EmitterServiceService = (function () {
    function EmitterServiceService(http) {
        this.http = http;
        this.url = 'http://58ac6e307cf949120009f3e5.mockapi.io/api/Pokemonz';
    }
    EmitterServiceService.get = function (ID) {
        if (!this._emitters[ID])
            this._emitters[ID] = new EventEmitter();
        return this._emitters[ID];
    };
    EmitterServiceService.prototype.getPokemon = function () {
        return this.http.get(this.url)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable.throw(error.json().error || 'Error - Port 3000 not running'); });
    };
    EmitterServiceService.prototype.addPokemon = function (body) {
        var bodyString = JSON.stringify(body);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        return this.http.post(this.url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable.throw(error.json().error || 'Error - Adding failed, data is insered tho..'); });
    };
    EmitterServiceService.prototype.updatePokemon = function (body) {
        var bodyString = JSON.stringify(body);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        return this.http.put(this.url + "/" + body['id'], body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable.throw(error.json().error || 'Error - Updating failed'); });
    };
    EmitterServiceService.prototype.removePokemon = function (id) {
        return this.http.delete(this.url + "/" + id)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable.throw(error.json().error || 'Error - Removing failed'); });
    };
    return EmitterServiceService;
}());
EmitterServiceService._emitters = {};
EmitterServiceService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], EmitterServiceService);
export { EmitterServiceService };
//# sourceMappingURL=../../../src/app/emitter-service.service.js.map