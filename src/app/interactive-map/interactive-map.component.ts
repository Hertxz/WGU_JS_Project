import { Component,Output, EventEmitter, OnInit} from '@angular/core';
import { ApiService } from '../api-service/api.service';
import { apiContainter } from '../api-service/api.container-class';
//Import the app API

@Component({
  selector: 'app-interactive-map',
  standalone: true,
  imports: [],
  templateUrl: './interactive-map.component.html',
  styleUrl: './interactive-map.component.css'
})

export class InteractiveMapComponent implements OnInit{
  

  @Output() clickedCountry = new EventEmitter<any>();

  countryContainer = new apiContainter();
  countryAPI = new ApiService();
  countryData!: any;

  ngOnInit(): void {
    const accessSVG = document.querySelector('svg');
    const allPaths = accessSVG?.querySelectorAll('path');
    allPaths?.forEach((path: SVGPathElement) =>{
      path.addEventListener('click', this.selectedCountry.bind(this))
    });
  }

  selectedCountry(event: MouseEvent){
    const path = event.target as SVGAElement;
    const countryID = path.id;
    this.countryData = this.countryAPI.getCountryInfo(countryID).then((data) =>{
    this.countryContainer.countryName = data.name;
    this.countryContainer.countryCapital = data.capitalCity;
    this.countryContainer.countryRegion = data.region.value;
    this.countryContainer.countryIL = data.incomeLevel.value
    this.countryContainer.countryLat = data.latitude;
    this.countryContainer.countryLong = data.longitude;

    this.clickedCountry.emit(this.countryContainer)
    })

  }
  
}







 

