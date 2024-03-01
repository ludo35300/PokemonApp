import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypeColor',
  standalone: true
})
export class PokemonTypeColorPipe implements PipeTransform {
  transform(type: string): string {
  
    let color: string;
  
    switch (type) {
      case 'Feu':
        color = 'bg-danger bg-lighten-xl';
        break;
      case 'Eau':
        color = ' bg-primary bg-lighten-xl';
        break;
      case 'Plante':
        color = ' bg-success bg-lighten-xl';
        break;
      case 'Insecte':
        color = ' bg-dark';
        break;
      case 'Normal':
        color = 'bg-secondary';
        break;
      case 'Vol':
        color = ' bg-info';
        break;
      case 'Poison':
        color = 'bg-light text-dark';
        break;
      case 'Fée':
        color = 'bg-danger text-dark';
        break;
      case 'Psy':
        color = ' bg-deep-purple';
        break;
      case 'Electrik':
        color = 'bg-warning';
        break;
      case 'Combat':
        color = ' bg-deep-orange';
        break;
      default:
        color = 'bg-secondary';
        break;
    }
  
    return 'badge rounded-pill ' + color;
  
  }

}
