import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CityWeatherForecast } from '@models/city-weather-forecast.model';
import { } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-city-weather-card-hourly-forecast',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './city-weather-card-hourly-forecast.component.html',
  styleUrl: './city-weather-card-hourly-forecast.component.scss'
})
export class CityWeatherCardHourlyForecastComponent {
  @Input() cityWeatherForecastHour!: CityWeatherForecast['forecast']['forecastday'][0]['hour'][0];

}
