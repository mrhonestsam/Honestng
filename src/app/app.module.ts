import { BrowserModule,DomSanitizer } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { routes } from './app.routes';

import { RealCarouselDemoModule } from './real-carousel/demo';

import { AppComponent } from './app.component';
import { CrudGridComponent } from './crud-grid/crud-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudGridComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    RealCarouselDemoModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
