import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgePipe } from '../calc-idade.pipe';
import { ConverteMedidaPipe } from '../converte-medida.pipe';


@NgModule({
  declarations: [AgePipe, ConverteMedidaPipe],
  exports: [AgePipe, ConverteMedidaPipe],
  imports: [CommonModule]
})
export class PipesModule {}

