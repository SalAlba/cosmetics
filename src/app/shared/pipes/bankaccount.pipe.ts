import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bankaccount'
})
export class BankaccountPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    // return value + '$%';
    return value.replace(/\s+/g, '').replace(/(\d{4})/g, '$1 ').trim();
  }

}
