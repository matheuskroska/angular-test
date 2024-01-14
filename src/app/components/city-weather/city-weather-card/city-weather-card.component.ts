import { Component, Input, inject } from '@angular/core';
import { WeatherService } from '@services/weather/weather.service';
import { CommonModule } from '@angular/common';
import { CityWeather } from '@models/city-weather.model';
import { RouterLink } from '@angular/router';
import { map, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PrepareWeatherService } from '@services/prepare-weather/prepare-weather.service';
import { WeatherDataControlService } from '@services/weather-data-control/weather-data-control.service';


@Component({
  selector: 'app-city-weather-card',
  standalone: true,
  imports: [MatTooltipModule, CommonModule, RouterLink, MatIconModule, MatCardModule, MatGridListModule, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './city-weather-card.component.html',
  styleUrl: './city-weather-card.component.scss'
})
export class CityWeatherCardComponent {
  private weatherService = inject(WeatherService);
  private prepareWeatherService = inject(PrepareWeatherService);
  private weatherDataControlService = inject(WeatherDataControlService);
  private refreshCityWeatherSubject = new Subject<string>();
  @Input() weather!: CityWeather;
  isLoading = false;

  ngOnInit() {
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
    this.weatherDataControlService.deleteCityWeather(cityUrl);
  }

  triggerCityWeatherUpdate(cityUrl: string) {
    this.isLoading = true;
    this.refreshCityWeatherSubject.next(cityUrl);
  }

  updateCityWeatherData(cityUrl: string) {
    this.weatherService.searchWeatherData(cityUrl).pipe(
      map(city => (this.prepareWeatherService.prepareCityWeatherData(city, cityUrl)))
    ).subscribe(updatedCity => {
      this.weatherDataControlService.updateCityWeather(updatedCity);
      this.isLoading = false;
    });
  }
}
