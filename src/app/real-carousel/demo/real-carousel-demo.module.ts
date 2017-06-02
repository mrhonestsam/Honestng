import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RealCarouselModule } from '../real-carousel.module';
import { RealCarouselDemoComponent } from './real-carousel-demo.component';

@NgModule({
    imports: [
        CommonModule,
        RealCarouselModule
    ],
    exports: [RealCarouselDemoComponent],
    declarations: [RealCarouselDemoComponent],
    providers: [],
})
export class  RealCarouselDemoModule { }
