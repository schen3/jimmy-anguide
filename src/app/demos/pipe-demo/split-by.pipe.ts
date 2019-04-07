import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitBy'
})
export class SplitByPipe implements PipeTransform {

  transform(value: string, ...args: Array<string>): Array<string> {
    const character = args ? args[0] : '';
    return value.toString().split(character);
  }

}
