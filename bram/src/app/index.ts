import {Component} from "@angular/core";

@Component({
    selector: 'app-pokemon-widget',
    template: `
        <div>
            <app-pokemon-form [listId]="listId" [editId]="editId"></app-pokemon-form>
            <app-pokemon-list [listId]="listId" [editId]="editId"></app-pokemon-list>
        </div>
    `,
})
export class PokemonComponent {

    private listId = 'POKEMON_COMPONENT_LIST';
    private editId = 'POKEMON_COMPONENT_EDIT';
 }
