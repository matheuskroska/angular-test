import { Component, Input } from '@angular/core';
import { CityWeatherForecast, Day } from '@models/city-weather-forecast.model';

@Component({
  selector: 'app-city-weather-card-daily-forecast',
  standalone: true,
  imports: [],
  templateUrl: './city-weather-card-daily-forecast.component.html',
  styleUrl: './city-weather-card-daily-forecast.component.scss'
})
export class CityWeatherCardDailyForecastComponent {
  @Input() cityWeatherForecastDay!: CityWeatherForecast['forecast']['forecastday'][0];

}
