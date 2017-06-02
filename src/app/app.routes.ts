import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RealCarouselDemoComponent} from './real-carousel/demo';

export const routes: Routes = [
    { path: '', component: AppComponent},
    { path: 'real-carousel', component: RealCarouselDemoComponent },

];
