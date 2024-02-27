import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { BorderCardDirective } from './border-card.directive';
import { PokemonService } from './pokemon.service';
import { RouterModule } from '@angular/router';
import { pokemonRoutes } from './pokemon.route';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../in-memory-data.service';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';



@NgModule({
  imports: [
    CommonModule,
    ListPokemonComponent,
    DetailPokemonComponent,
    PokemonTypeColorPipe,
    BorderCardDirective,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    FormsModule,
    RouterModule.forChild(pokemonRoutes),
    AddPokemonComponent
  ],
  providers: [PokemonService]
})
export class PokemonModule { }
