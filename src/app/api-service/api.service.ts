import { Injectable } from '@angular/core';

@Injectable(
  {
    providedIn: 'root'
  }
)

export class ApiService {

  apiURL = 'http://api.worldbank.org/v2/country/';

  async queryCountryInfo(cName: String){
    const info = await fetch(this.apiURL + cName +'?format=json');
    return info;
  }
  async getCountryInfo(cName: String){
    const info = await this.queryCountryInfo(cName);
    const data = await info.json();
    return data[1][0];
  }


}