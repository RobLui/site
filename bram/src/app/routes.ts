// Dit id de geupdate versie van de vorige router voorziening die angular(1) had
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Verschillende components die geroute moeten worden hier onder

import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonBoxComponent } from './pokemon-box/pokemon-box.component';
import { PokemonComponent } from './index';

// Hier worden de routes in gemaakt
const routing: Routes = [
  {
    path: 'list',
    component: PokemonListComponent
  },
  {
    path: 'box',
    component: PokemonBoxComponent
  }
];
// forRoot betekent dat alle routes overal ter beschikking worden gesteld
  @NgModule({
    imports: [RouterModule.forRoot(routing)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  // Wordt hieronder geexporteerd  om beschikbaar te zijn in andere components
  export const routedComponents = [PokemonListComponent, PokemonBoxComponent];
