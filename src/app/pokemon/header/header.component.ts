import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  titre!: string;

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.titre = this.pokemonService.getTitre();
  }


}
