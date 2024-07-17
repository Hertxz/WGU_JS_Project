import { Component, EventEmitter, Input, Output } from '@angular/core';
import { apiContainter } from '../api-service/api.container-class';

@Component({
  selector: 'app-interactive-map-card',
  standalone: true,
  imports: [],
  templateUrl: './interactive-map-card.component.html',
  styleUrl: './interactive-map-card.component.css'
})
export class InteractiveMapCardComponent{
  
@Input() container?: apiContainter;

}
