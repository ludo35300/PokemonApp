import { Component, OnInit } from '@angular/core';
import { PokemonFormComponent } from "../pokemon-form/pokemon-form.component";
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-add-pokemon',
  standalone: true,
  templateUrl: './add-pokemon.component.html',
  styleUrl: './add-pokemon.component.scss',
  imports: [PokemonFormComponent]
})
export class AddPokemonComponent implements OnInit {

  pokemon!: Pokemon;
  ngOnInit() {
    this.pokemon = new Pokemon();
  }

}
