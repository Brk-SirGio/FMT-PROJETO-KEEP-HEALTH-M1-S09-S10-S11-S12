import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converteMedida'
})
export class ConverteMedidaPipe implements PipeTransform {

  transform(value: number | string, ...args: any[]): string | null {
    if (typeof value !== 'number' && !/^\d+$/.test(value)) {
      return null;
    }

    const centimetros = Number(value);
    const metros = centimetros / 100;

    return metros.toLocaleString('pt-BR', { maximumFractionDigits: 2 }) + 'm';
  }
}
