import { Component, inject } from '@angular/core';
import { CityWeatherCardComponent } from '../city-weather-card/city-weather-card.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { WeatherService } from '../../../services/weather.service';
import { CityWeather } from '../../../models/city-weather.model';
@Component({
  selector: 'app-city-weather-list',
  standalone: true,
  imports: [CityWeatherCardComponent, MatGridListModule],
  templateUrl: './city-weather-list.component.html',
  styleUrl: './city-weather-list.component.scss'
})
export class CityWeatherListComponent {
  private weatherService = inject(WeatherService);

  weathers: CityWeather[] = [];


  ngOnInit() {
    this.weatherService.weatherData$.subscribe(res => {
      this.weathers = res;
    })

  }

}
