import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CaruselComponent } from './carusel.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CaruselComponent]
})
export class CaruselModule { }
