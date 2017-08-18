import {Component, Input} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {EmitterServiceService} from "../emitter-service.service";
import {Pokemon} from "../model/pokemon";

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})

export class PokemonFormComponent {

  constructor(
      private EmitterServiceService: EmitterServiceService
      ){}
  // Local properties
  private model = new Pokemon(new Date(), '', '');
  private editing = false;

  // Input properties
   @Input() editId: string;
   @Input() listId: string;

  submitPokemon(){
      // Variable to hold a reference of addComment/updateComment
      let pokemonOperation:Observable<Pokemon[]>;

      if(!this.editing){
          // Create a new pokemon
          pokemonOperation = this.EmitterServiceService.addPokemon(this.model)
      } else {
          // Update an existing pokemon
          pokemonOperation = this.EmitterServiceService.updatePokemon(this.model)
      }

      // Subscribe to observable
      pokemonOperation.subscribe(
                              comments => {
                                  // Emit list event
                                  EmitterServiceService.get(this.listId).emit(Pokemon);
                                  // Empty model
                                  this.model = new Pokemon(new Date(), '', '');
                                  // Switch editing status
                                  if(this.editing) this.editing = !this.editing;
                              },
                              err => {
                                  // Log errors if any
                                  console.log(err);
                              });
  }

  ngOnChanges() {
      EmitterServiceService.get(this.editId).subscribe((pokemon:Pokemon) => {
          this.model = pokemon
          this.editing = true;
      });
  }
}
