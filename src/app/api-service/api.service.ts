import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable(
  {
    providedIn: 'root'
  }
)

export class ApiService {

 constructor(private http: HttpClient){}

  apiURL = 'http://api.worldbank.org/v2/country/';

 getCountryInfo(cName: String){
    const info = this.http.get(this.apiURL + cName +'?format=json');
    return info;
  }
}