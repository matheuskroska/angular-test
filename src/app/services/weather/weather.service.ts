import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '@environments/environment';
import { CityWeather } from '@models/city-weather.model';
import { City } from '@models/city.model';
import { CityWeatherForecast } from '@models/city-weather-forecast.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private http = inject(HttpClient);

  private getHeaders(): HttpHeaders {
    return new HttpHeaders().set("key", environment.apiKey);
  }

  searchWeatherData(cityName: string): Observable<CityWeather> {
    return this.http.get<CityWeather>(`${environment.apiUrl}/current.json?q=${cityName}&lang=pt`, { headers: this.getHeaders() });
  }

  searchWeatherDataForecast(cityName: string): Observable<CityWeatherForecast> {
    return this.http.get<CityWeatherForecast>(`${environment.apiUrl}/forecast.json?q=${cityName}&days=7&lang=pt`, { headers: this.getHeaders() });
  }

  searchCityNames(cityName: string): Observable<City[]> {
    return this.http.get<City[]>(`${environment.apiUrl}/search.json?q=${cityName}`, { headers: this.getHeaders() });
  }
}
