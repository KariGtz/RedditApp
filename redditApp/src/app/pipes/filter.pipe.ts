import { Pipe, PipeTransform } from '@angular/core';
import { Child } from '../interfaces/interfaces';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: any[], text: string, column: string): any[] {

    if ( text === '' ) {
      return array;
    }

    text = text.toLowerCase();

    return array.filter( ( child: Child ) => {
      // SI este texto incluye lo que sea que este recibiendo en post subreddit se agrega
      return child.data[column].toLowerCase()
              .includes( text ) || child.data['title'].toLowerCase()
              .includes( text );
    });

    return array;
  }

}
