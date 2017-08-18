import { OnInit, Component, EventEmitter, Input, OnChanges } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { PokemonBoxComponent } from '../pokemon-box/pokemon-box.component';
import { EmitterServiceService } from '../emitter-service.service';
import { Pokemon } from '../model/pokemon'

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})

  export class PokemonListComponent{

      constructor(
          private EmitterServiceService: EmitterServiceService
          ){}
      // Lokale property
      pokemon: Pokemon[];
      // Input properties (uit components)
      @Input() listId: string;
      @Input() editId: string;

      loadPokemon(){
        // Get all pokemon
        this.EmitterServiceService.getPokemon()
        .subscribe(
         pokemon => this.pokemon = pokemon, // Bind to view/html component
          err => {
              console.log(err); // Log errors als er zijn
          });
      }

      ngOnInit(){
        // Vuur de load pokemon functie uit
        this.loadPokemon()
      }

      ngOnChanges(changes:any) {
        // Check voor veranderingen
        EmitterServiceService.get(this.listId).subscribe((pokemon:Pokemon[]) => {this.pokemon = pokemon});
      }

}
