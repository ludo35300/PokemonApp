import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { NgIf } from '@angular/common';
import { PokemonFormComponent } from "../pokemon-form/pokemon-form.component";

@Component({
  selector: 'app-edit-pokemon',
  standalone: true,
  templateUrl: './edit-pokemon.component.html',
  styleUrl: './edit-pokemon.component.scss',
  imports: [NgIf, PokemonFormComponent]
})
export class EditPokemonComponent implements OnInit {

  pokemon!: Pokemon | undefined;
  pokemonName!: string;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
    if (pokemonId) {

      this.pokemonService.getPokemonById(+pokemonId)
        .subscribe(pokemon => this.pokemon = pokemon);

    } else {
      this.pokemon = undefined;
    }
  }

  getPokemonName(): string | undefined {
    return this.pokemon?.name;
  }

}

