import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonTypeColorPipe } from "../pokemon-type-color.pipe";
import { PokemonService } from '../service/pokemon.service';
import { CardTypeColorTsPipe } from "../card-type-color.ts.pipe";

@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  templateUrl: './detail-pokemon.component.html',
  styleUrl: './detail-pokemon.component.scss',
  imports: [CommonModule, PokemonTypeColorPipe, CardTypeColorTsPipe]
})

export class DetailPokemonComponent implements OnInit {

  pokemon!: Pokemon | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) { }


  ngOnInit(): void {
    // on recupere l'id
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');

    // si il y a bien un id (sinon id=undefined) (+ transforme string to number)
    if (pokemonId) {
      this.pokemonService.getPokemonById(+pokemonId)
        .subscribe(pokemon => this.pokemon = pokemon);

    }
  }


  deletePokemon(pokemon: Pokemon) {
    this.pokemonService.deletePokemonById(pokemon.pokedexId)
      .subscribe(() => this.goToPokemonList());
  }
  goToPokemonList() {
    this.router.navigate(['/pokemons']);
  }

  goToEditPokemon(pokemon: Pokemon) {
    this.router.navigate(['/edit/pokemon', pokemon.pokedexId]);
  }
}
