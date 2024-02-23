import { Component, OnInit, HostListener} from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { POKEMONS } from './mock.pokemon';
import { Pokemon } from './pokemon';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    NgIf, 
    NgFor,
    PokemonTypeColorPipe, 
    BorderCardDirective
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected?: Pokemon;

  ngOnInit(){
      console.table(this.pokemonList);
  }

  selectPokemon(pokemonId: string){
    /* + -> transforme string to number */
    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId); 
    if(pokemon){
      console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}.`);
      this.pokemonSelected = pokemon;
    }else{
      console.log(`Vous avez demandé un pokémon qui n'existe pas.`);
      this.pokemonSelected = pokemon;
    }
  }
}
 