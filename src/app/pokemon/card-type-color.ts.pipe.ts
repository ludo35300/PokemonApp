import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardTypeColorTs',
  standalone: true
})
export class CardTypeColorTsPipe implements PipeTransform {

  transform(type: string): string {
    let color: string;

    switch (type) {
      case 'Feu':
        color = 'card--fire';
        break;
      case 'Eau':
        color = 'card--water';
        break;
      case 'Plante':
        color = 'card--grass';
        break;
      case 'Insecte':
        color = 'card--normal';
        break;
      case 'Normal':
        color = 'card--normal';
        break;
      case 'Vol':
        color = 'card--normal';
        break;
      case 'Poison':
        color = 'card--ice';
        break;
      case 'Fée':
        color = 'card--fairy';
        break;
      case 'Psy':
        color = 'card--ice';
        break;
      case 'Electrik':
        color = 'card--electric';
        break;
      case 'Combat':
        color = 'card--normal';
        break;
      default:
        color = 'card--normal';
        break;
    }

    return color;

  }

}