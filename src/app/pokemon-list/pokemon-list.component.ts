import {Component, Input} from "@angular/core";
import {EmitterServiceService} from "../emitter-service.service";
import {OnChanges} from "angular2/core";
import {Pokemon} from "../model/pokemon";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  // styleUrls: ['./pokemon-list.component.css']
})

  export class PokemonListComponent implements OnChanges{

      constructor(
          private EmitterServiceService: EmitterServiceService
          ){}
      // Local property
      pokemon: Pokemon[];
      // Input properties (uit components)
      @Input() listId: string;
      @Input() editId: string;

      loadPokemon(){
        // Get all pokemon from the service
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
          EmitterServiceService.get(this.listId).subscribe((pokemon:Pokemon) => {
              this.loadPokemon();
              this.EmitterServiceService
              console.log("werkt!");
          });
      }

}
