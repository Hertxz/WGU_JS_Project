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

  constructor(private countryAPI: ApiService){}

  @Output() clickedCountry = new EventEmitter<any>();

  countryContainer = new apiContainter();
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
    this.countryData = this.countryAPI.getCountryInfo(countryID).subscribe((data: any) =>{
    this.countryContainer.countryName = data[1][0].name;
    this.countryContainer.countryCapital = data[1][0].capitalCity;
    this.countryContainer.countryRegion = data[1][0].region.value;
    this.countryContainer.countryIL = data[1][0].incomeLevel.value
    this.countryContainer.countryLat = data[1][0].latitude;
    this.countryContainer.countryLong = data[1][0].longitude;
    console.log(
      data[1],
      this.countryContainer
    )

    this.clickedCountry.emit(this.countryContainer)
    })

  }
  
}







 

