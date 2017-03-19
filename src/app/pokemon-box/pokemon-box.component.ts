import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';

// SERVICE
import { EmitterServiceService } from '../emitter-service.service';

// MODEL
import { Pokemon } from '../model/pokemon'

@Component({
  selector: 'app-pokemon-box',
  templateUrl: './pokemon-box.component.html',
  styleUrls: ['./pokemon-box.component.css']
})

export class PokemonBoxComponent {

  // Constructor
   constructor(
      private EmitterServiceService: EmitterServiceService
      ){}
  // Define input properties
  @Input() pokemon: Pokemon;
  @Input() listId: string;
  @Input() editId: string;

  editPokemon(){
      // Emit edit event
      EmitterServiceService.get(this.editId).emit(this.pokemon);
  }

  deletePokemon(id:string){
      // Call removeComment() from CommentService to delete comment
      this.EmitterServiceService.removePokemon(id).subscribe(
                              comments => {
                                  EmitterServiceService.get(this.listId).emit(comments);
                              },
                              err => { console.log(err); });
  }

}
