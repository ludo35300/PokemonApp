import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { POKEMONS } from '../mock.pokemon';
import { Pokemon } from '../pokemon';
import { BorderCardDirective } from '../border-card.directive';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [ 
    NgFor, 
    CommonModule,
    BorderCardDirective,
    PokemonTypeColorPipe
  ],
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.scss'
})

export class ListPokemonComponent{
  pokemonList: Pokemon[] = POKEMONS;

  constructor(private router: Router){}

  goToPokemon(pokemon: Pokemon){
    this.router.navigate(['/pokemon/', pokemon.id])
  }
}
