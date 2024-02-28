import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Pokemon } from '../pokemon';
import { BorderCardDirective } from '../border-card.directive';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { Router, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { PokemonService } from '../service/pokemon.service';
import { CardTypeColorTsPipe } from '../card-type-color.ts.pipe';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.scss',
  imports: [
    NgFor,
    CommonModule,
    BorderCardDirective,
    PokemonTypeColorPipe,
    RouterOutlet, RouterModule,
    CardTypeColorTsPipe,
    NgxPaginationModule
  ]
})

export class ListPokemonComponent implements OnInit {
  pokemonList!: Pokemon[];

  constructor(
    private router: Router,
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.pokemonService.getPokemonList()
      .subscribe(pokemonList => this.pokemonList = pokemonList);
  }

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemon/', pokemon.pokedexId])
  }
}
