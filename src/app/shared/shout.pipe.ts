import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trumpify'
})
export class ShoutPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    value = value || 'America first! America first!';
    return value.toUpperCase().concat("!!!");
  }

}
