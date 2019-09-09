import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = environment.weatherApiKey;

  baseUri = environment.weatherBaseUri;

  constructor(private http: HttpClient) { }

  getWeather() {

    const uri = this.baseUri;

    return this.http.get(uri);

  }


}
