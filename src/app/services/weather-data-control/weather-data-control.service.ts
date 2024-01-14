import { Injectable } from '@angular/core';
import { CityWeather } from '@models/city-weather.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataControlService {
  private dataSource = new BehaviorSubject<CityWeather[]>([]);
  weatherData$ = this.dataSource.asObservable();


  private updateData(data: CityWeather, isAddOperation: boolean = false): void {
    const currentCities = this.dataSource.getValue();
    const existingCityIndex = currentCities.findIndex(city => city.location.url === data.location.url);

    if (existingCityIndex > -1) {
      currentCities[existingCityIndex] = data;
    } else if (isAddOperation) {
      currentCities.push(data);
    }

    this.dataSource.next(currentCities);
  }

  addCityWeather(data: CityWeather) {
    this.updateData(data, true);
  }

  updateCityWeather(data: CityWeather) {
    this.updateData(data);
  }

  deleteCityWeather(cityUrl: string) {
    const currentCities = this.dataSource.getValue();
    const updatedCities = currentCities.filter(data => data.location.url !== cityUrl);
    this.dataSource.next(updatedCities);
  }
}
