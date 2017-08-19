import {EventEmitter, Injectable} from "@angular/core";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
// MODEL
import {Pokemon} from "./model/pokemon";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {Body} from "@angular/http/src/body";

@Injectable()
export class EmitterServiceService{

    constructor (private http: Http) {}
    // data url
    // private url = 'http://58ac6e307cf949120009f3e5.mockapi.io/api/Pokemonz';
    private url = 'https://599748ee3c298d0011c5de65.mockapi.io/api/pokemons';
    // data emitter
    private static _emitters: { [ID: string]: EventEmitter<any> } = {};
    // event emitter
    static get(ID: string): EventEmitter<any> {

        if (!this._emitters[ID])
            this._emitters[ID] = new EventEmitter();
        return this._emitters[ID];
    }

     // Fetch all existing pokemon
     getPokemon() : Observable<Pokemon[]>{
         // ...using get request
         return this.http.get(this.url)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Error - Port not running'));
                         }

     // Add a new pokemon
    addPokemon (body: Object): Observable<Pokemon[]> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        return this.http.post(this.url, body,options) // ...using post request
                         .map((res:Response) => res.json())// ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Error - Adding failed, data is inserted tho..')); //...errors if any
    }

    // Update pokemon
    updatePokemon (body: Object): Observable<Pokemon[]> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        return this.http.put(`${this.url}/${body['id']}`, body,options) // ...using put request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Error - Updating failed')); //...errors if any
    }

    // Delete pokemon
    removePokemon (id:string): Observable<Pokemon[]> {
        return this.http.delete(`${this.url}/${id}`) // ...using put request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Error - Removing failed')); //...errors if any
    }
}
