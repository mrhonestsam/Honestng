import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DataTableModule,SharedModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,DataTableModule
  ],
  declarations: []
})
export class CrudGridModule { }
