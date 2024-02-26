import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TroupeModule } from './troupe/troupe.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TroupeModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
}
