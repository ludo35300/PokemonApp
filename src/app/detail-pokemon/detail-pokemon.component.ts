import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock.pokemon';
import { Pokemon } from '../pokemon';
import { PokemonTypeColorPipe } from "../pokemon-type-color.pipe";

@Component({
    selector: 'app-detail-pokemon',
    standalone: true,
    templateUrl: './detail-pokemon.component.html',
    styleUrl: './detail-pokemon.component.scss',
    imports: [NgIf, CommonModule, PokemonTypeColorPipe]
})
export class DetailPokemonComponent implements OnInit{
  pokemonList!: Pokemon[];
  pokemon!: Pokemon|undefined;
  constructor(private route: ActivatedRoute, private router: Router){ }

  ngOnInit(): void {
    this.pokemonList = POKEMONS;
    // on recupere l'id
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    console.log(pokemonId);
    // si il y a bien un id (sinon id=undefined)
    if(pokemonId){
      this.pokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
    }
  }
  goToPokemonList(){
    this.router.navigate(['/pokemons']);
  }
}