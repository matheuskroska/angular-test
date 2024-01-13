import { Component, Input, inject } from '@angular/core';
import { WeatherService } from '../../../services/weather.service';
import { CityWeatherForecast } from '../../../models/city-weather-forecast.model';


@Component({
  selector: 'app-city-weather-detail',
  standalone: true,
  imports: [],
  templateUrl: './city-weather-detail.component.html',
  styleUrl: './city-weather-detail.component.scss'
})
export class CityWeatherDetailComponent {
  private weatherService = inject(WeatherService);

  @Input() id!: string;
  cityWeatherForecast!: CityWeatherForecast;

  ngOnInit() {
    this.weatherService.searchWeatherDataForecast(this.id).subscribe((city: CityWeatherForecast) => {
      this.cityWeatherForecast = city;
    })
  }
}
