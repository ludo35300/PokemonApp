import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'troupeTypeColor',
  standalone: true
})
export class TroupeTypeColorPipe implements PipeTransform {
  transform(type: string): string {

    let color: string;

    switch (type) {
      case 'Elixir':
        color = 'pink lighten-4';
        break;
      case 'Elixir Noir':
        color = 'deep-purple darken-2';
        break;
      default:
        color = 'grey';
        break;
    }

    return 'chip ' + color;

  }

}
