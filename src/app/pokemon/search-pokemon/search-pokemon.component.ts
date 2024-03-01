import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { Observable, Subject, debounceTime, distinct, distinctUntilChanged, map, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../service/pokemon.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-search-pokemon',
  standalone: true,
  imports: [CommonModule,  ],
  templateUrl: './search-pokemon.component.html',
  styleUrl: './search-pokemon.component.scss',
  providers: [PokemonService, Ng2SearchPipeModule]
})
export class SearchPokemonComponent implements OnInit{
  term!: string;
  /* stocke les recherches de l'utilisateur */
  searchTerms = new Subject<string>
  /** recherche dans la pockemonList le subject */
  /** $ = convention pour indiqué un flux de données (observable) */
  pokemons$!: Observable<Pokemon[]>;
  

  constructor(private router: Router, private pokemonService: PokemonService){}

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      /** triage des requetes serveur */
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term) => this.pokemonService.searchPokemonList(term)),
      // concatMap, mergeMap, SwitchMap(annule les requetes précédentes)
      
    );
    
  }
  search(term: string){
    this.searchTerms.next(term);
  }
  goToDetail(pokemon: Pokemon){
    const link = ['/pokemon/', pokemon.pokedexId]
    this.router.navigate(link);
  }

}
