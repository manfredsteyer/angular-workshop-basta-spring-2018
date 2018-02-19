import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'city',
  pure: true
})
export class CityPipe implements PipeTransform {

  transform(value: string, fmt: string): string {

    let short, long;

    switch(value) {
      case 'Frankfurt':
        short = 'FRA';
        long = 'Airport Frankfurt International';
        break;
      case 'Graz':
        short = 'GRZ';
        long = 'Flughafen Graz Thalerhof';
        break;
      case 'Hamburg':
        short = 'HAM';
        long = 'Airport Hamburg Fulsbüttel - Helmut Schmidt';
        break;
      default:
        short = long = value;
    }

    if (fmt == 'short') return short;
    return long;

  }

}