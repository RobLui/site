// MODULES
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
// COMPONENTS
import {AppComponent} from "./app.component";
import {PokemonFormComponent} from "./pokemon-form/pokemon-form.component";
import {PokemonListComponent} from "./pokemon-list/pokemon-list.component";
import {PokemonBoxComponent} from "./pokemon-box/pokemon-box.component";
import {PokemonComponent} from "./index";
// SERVICES
import {EmitterServiceService} from "./emitter-service.service";

// ROUTES

@NgModule({
  declarations: [
    AppComponent,
    PokemonFormComponent,
    PokemonListComponent,
    PokemonBoxComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    EmitterServiceService
  ],
  bootstrap: [
    AppComponent
  ],
  exports:[
    AppComponent,
    PokemonFormComponent,
    PokemonListComponent,
    PokemonBoxComponent,
    PokemonComponent
  ]
})
export class AppModule { }
