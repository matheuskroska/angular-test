import { Component, Input, inject } from '@angular/core';
import { WeatherService } from '../../../services/weather.service';
import { CommonModule } from '@angular/common';
import { CityWeather } from '../../../models/city-weather.model';
import { RouterLink } from '@angular/router';
import { map, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-city-weather-card',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIconModule],
  templateUrl: './city-weather-card.component.html',
  styleUrl: './city-weather-card.component.sass'
})
export class CityWeatherCardComponent {
  private weatherService = inject(WeatherService);
  private refreshCityWeatherSubject = new Subject<string>();
  weathers: CityWeather[] = [];

  ngOnInit() {
    this.weatherService.weatherData$.subscribe(res => {
      this.weathers = res;
    })

    this.refreshCityWeatherSubject
      .pipe(debounceTime(1000))
      .subscribe((searchValue) => {
        this.updateCityWeatherData(searchValue);
      });
  }

  ngOnDestroy() {
    this.refreshCityWeatherSubject.complete();
  }

  removeCityWeatherData(cityUrl: string) {
    this.weatherService.deleteWeatherData(cityUrl);
  }

  triggerCityWeatherUpdate(cityUrl: string) {
    this.refreshCityWeatherSubject.next(cityUrl);
  }

  updateCityWeatherData(cityUrl: string) {
    this.weatherService.searchWeatherData(cityUrl).pipe(
      map(city => (this.weatherService.prepareCityWeatherData(city, cityUrl)))
    ).subscribe(updatedCity => {
      this.weatherService.getWeatherData(updatedCity);
    });
  }
}
