import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonModule } from './pokemon/pokemon.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';


// HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    HttpClientModule,
    PokemonModule, NgxPaginationModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
}
