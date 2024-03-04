import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { BorderCardDirective } from './border-card.directive';
import { PokemonService } from './services/pokemon.service';
import { RouterModule } from '@angular/router';
import { pokemonRoutes } from './pokemon.route';
import { FormsModule } from '@angular/forms';
import { NgxSearchFilterModule } from 'ngx-search-filter';



@NgModule({
  imports: [
    CommonModule,
    ListPokemonComponent,
    DetailPokemonComponent,
    PokemonTypeColorPipe,
    BorderCardDirective,
    FormsModule,
    RouterModule.forChild(pokemonRoutes),
    NgxSearchFilterModule
  ],
  providers: [PokemonService]
})
export class PokemonModule {

}
