import { Injectable } from '@angular/core';
import { Pokemon } from '../pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()

export class PokemonService {
  apiUrl = "https://pokebuildapi.fr/api/v1/pokemon";

  constructor(private http: HttpClient, private router: Router) {

  }

  getTitre(): string {
    if (this.router.url.startsWith("/pokemons")) {
      return "Liste des Pokémon";
    } else {
      return "Détails du Pokémon";
    }
  }


  // retourne la liste pokémons
  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.apiUrl);
    /* return this.http.get<Pokemon[]>('api/pokemons').pipe(
       tap((pokemonList) => console.table(pokemonList)),
       catchError((error) => this.handleError(error, []))
     );*/
  }
  // retourne le pokemon correspondant a l'id
  getPokemonById(pokemonId: number): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon>(`${this.apiUrl}/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  searchPokemonList(term: string): Observable<Pokemon[]> {
    // recherche si la recherche est superieur a 2 lettres
    if (term.length <= 1) {
      return of([]);
    }
    return this.http.get<Pokemon[]>(`${this.apiUrl}/?name=${term}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    )
  }

  updatePokemon(pokemon: Pokemon): Observable<Pokemon | undefined> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/json' })
    };
    return this.http.put('api/pokemons', pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    )
  }

  deletePokemonById(pokemonId: number): Observable<null> {
    return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/json' })
    };
    return this.http.post<Pokemon>('api/pokemons', pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    )
  }

  private log(response: any) {
    console.table(response);
  }
  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

  getPokemonTypeList(): string[] {
    return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol', 'Combat', 'Psy'];
  }


}
