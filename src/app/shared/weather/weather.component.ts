import { WeatherService } from './../../services/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeather('Surrey').subscribe(data => this.weatherData = data);
  }

  city: string

  public weatherData: any;

  getWeather(city:string) {
    debugger;
    this.weatherService.getWeather(city).subscribe(data => {console.log(data); this.weatherData = data; console.log(this.weatherData.name);
    });
  }

}
