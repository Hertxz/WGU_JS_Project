
//import the components from their files location
import { Routes } from '@angular/router';
import { InteractiveMapComponent } from './interactive-map/interactive-map.component'
import { InteractiveMapCardComponent } from './interactive-map-card/interactive-map-card.component';
import { InteractiveMapWrapperComponent } from './interactive-map-wrapper/interactive-map-wrapper.component';

export const routes: Routes = [
    {path: 'interactive-map', component: InteractiveMapComponent},
    {path: 'interactive-map-card', component: InteractiveMapCardComponent},
    {path: 'interactive-map-wrapper', component: InteractiveMapWrapperComponent},
    {path:'', redirectTo: '/interactive-map-wrapper', pathMatch: 'full'}
];
