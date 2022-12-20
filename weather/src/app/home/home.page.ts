import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

const API_KEY = environment.API_KEY;
const API_URL = environment.API_URL;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  weatherTemp: any;
  todayDate: Date = new Date();
  cityName: any;
  weatherIcon: any;
  weatherDescription: any;

  constructor(public httpClient:HttpClient) {
    this.loadData();
  }

  loadData() {
    this.httpClient.get(`${API_URL}/weather?q=${'Gendringen'}&appid=${API_KEY}`)
      .subscribe(result => {
        console.log(result);

        this.weatherTemp = result['main'];
        console.log(this.weatherTemp);

        this.cityName = result['name'];
        console.log(this.cityName);

        this.weatherDescription = result['weather'][0].icon;
        console.log(this.weatherDescription);

        this.weatherIcon = 'http://openweathermap.org/img/wn/' + this.weatherDescription + '@4x.png';
      });
  }
}
