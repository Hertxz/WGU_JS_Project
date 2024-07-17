import { Component } from '@angular/core';
import { InteractiveMapComponent } from "../interactive-map/interactive-map.component";
import { InteractiveMapCardComponent } from "../interactive-map-card/interactive-map-card.component";
import { apiContainter } from '../api-service/api.container-class';

@Component({
  selector: 'app-interactive-map-wrapper',
  standalone: true,
  imports: [InteractiveMapComponent, InteractiveMapCardComponent],
  templateUrl: './interactive-map-wrapper.component.html',
  styleUrl: './interactive-map-wrapper.component.css'
})
export class InteractiveMapWrapperComponent {
  
  clickedCountry!: apiContainter;

  passCountry(obj:apiContainter){
    this.clickedCountry = obj;
  }

};


