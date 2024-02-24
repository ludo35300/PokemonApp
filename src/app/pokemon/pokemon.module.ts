import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { BorderCardDirective } from './border-card.directive';
import { PokemonService } from './pokemon.service';



@NgModule({
  imports: [
    ListPokemonComponent,
    DetailPokemonComponent,
    PokemonTypeColorPipe,
    BorderCardDirective,
    CommonModule
  ],
  providers: [PokemonService]
})
export class PokemonModule { }
