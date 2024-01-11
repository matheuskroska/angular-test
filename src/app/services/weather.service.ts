import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { CityWeather } from '../models/city-weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private dataSource = new BehaviorSubject<CityWeather[]>([]);
  weatherData$ = this.dataSource.asObservable();

  constructor(private http: HttpClient) { }

  updateWeatherData(data: CityWeather) {
    this.dataSource.getValue().push(data);
    this.dataSource.next(this.dataSource.getValue());
  }

  searchWeatherData(cityName: string): Observable<CityWeather> {
    const headers = new HttpHeaders().set("key", environment.apiKey);
    const options = { headers };

    return this.http.get<CityWeather>(`${environment.apiUrl}/current.json?q=${cityName}`, options)
  }

  searchCityNames(cityName: string): Observable<string[]> {
    const headers = new HttpHeaders().set("key", environment.apiKey);
    const options = { headers };

    return this.http.get<string[]>(`${environment.apiUrl}/search.json?q=${cityName}`, options)
  }
}
