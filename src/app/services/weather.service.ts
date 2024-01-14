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
  private dataSource = new BehaviorSubject<CityWeather[]>([]);
  weatherData$ = this.dataSource.asObservable();

  private getHeaders(): HttpHeaders {
    return new HttpHeaders().set("key", environment.apiKey);
  }

  prepareCityWeatherData(data: CityWeather, url: string) {
    const date = new Date();

    return {
      ...data,
      location: {
        ...data.location,
        url: url,
        updatedAt: date.toLocaleString("pt-BR", {
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "America/Sao_Paulo"
        }),
      }
    }
  }

  getWeatherData(data: CityWeather) {
    const currentCities = this.dataSource.getValue();
    const existingCityIndex = currentCities.findIndex(city => city.location.url === data.location.url);

    if (existingCityIndex > -1) {
      currentCities[existingCityIndex] = data;
    } else {
      currentCities.push(data);
    }

    this.dataSource.next(currentCities);
  }

  deleteWeatherData(cityUrl: string) {
    this.dataSource.next(this.dataSource.getValue().filter(data => data.location.url !== cityUrl));
  }

  searchWeatherData(cityName: string): Observable<CityWeather> {
    const options = { headers: this.getHeaders() };
    return this.http.get<CityWeather>(`${environment.apiUrl}/current.json?q=${cityName}&lang=pt`, options);
  }

  searchWeatherDataForecast(cityName: string): Observable<CityWeatherForecast> {
    const options = { headers: this.getHeaders() };
    return this.http.get<CityWeatherForecast>(`${environment.apiUrl}/forecast.json?q=${cityName}&days=3&lang=pt`, options);
  }

  searchCityNames(cityName: string): Observable<City[]> {
    const options = { headers: this.getHeaders() };
    return this.http.get<City[]>(`${environment.apiUrl}/search.json?q=${cityName}`, options);
  }
}
