import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'plural',
  standalone: true,
})
export class PluralPipe implements PipeTransform {
  transform(amount: number | string | undefined, singular: string, plural: string): string {
    if (amount === 1 || amount === '1') {
      return `${amount} ${singular}`;
    } else if (!amount) {
      return `0 ${plural}`;
    }
    return `${amount} ${plural}`;
  }
}
