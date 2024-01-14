import { Component, INJECTOR, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CityWeatherForecast } from '@models/city-weather-forecast.model';

@Component({
  selector: 'app-city-weather-card-forecast',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './city-weather-card-forecast.component.html',
  styleUrl: './city-weather-card-forecast.component.scss'
})

export class CityWeatherCardForecastComponent {
  @Input() cityWeatherForecast!: CityWeatherForecast;
  @Input() weather!: string;
}

