import { Component, Input } from '@angular/core';
import { CityWeatherForecast } from '@models/city-weather-forecast.model';

@Component({
  selector: 'app-city-weather-card-hourly-forecast',
  standalone: true,
  imports: [],
  templateUrl: './city-weather-card-hourly-forecast.component.html',
  styleUrl: './city-weather-card-hourly-forecast.component.scss'
})
export class CityWeatherCardHourlyForecastComponent {
  @Input() cityWeatherForecastHour!: CityWeatherForecast['forecast']['forecastday'][0]['hour'][0];
}
