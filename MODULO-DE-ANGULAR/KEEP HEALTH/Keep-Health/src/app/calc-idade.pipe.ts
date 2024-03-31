import { Pipe, PipeTransform } from '@angular/core';
import { differenceInYears, differenceInMonths, differenceInDays, startOfDay } from 'date-fns';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {
  transform(nascimento: Date): number {
    if (!nascimento) {
      return 0;
    }
  
    const today = new Date();
    const todayStartOfDay = startOfDay(today);
    const nascimentoStartOfDay = startOfDay(nascimento);
    const totalDays = differenceInDays(todayStartOfDay, nascimentoStartOfDay);
  
    return Math.floor(totalDays / 365);
  }
  
  }
