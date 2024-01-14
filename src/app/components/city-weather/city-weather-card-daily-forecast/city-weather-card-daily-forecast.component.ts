import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CityWeatherForecast } from '@models/city-weather-forecast.model';

@Component({
  selector: 'app-city-weather-card-daily-forecast',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './city-weather-card-daily-forecast.component.html',
  styleUrl: './city-weather-card-daily-forecast.component.scss',

})
export class CityWeatherCardDailyForecastComponent {
  @Input() cityWeatherForecastDay!: CityWeatherForecast['forecast']['forecastday'][0];

}
