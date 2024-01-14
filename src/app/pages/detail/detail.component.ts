import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageHeaderComponent } from '@components/page-header/page-header.component';
import { CityWeatherForecast } from '@models/city-weather-forecast.model';
import { WeatherService } from '@services/weather/weather.service';
import { CityWeatherCardForecastComponent } from '@components/city-weather/city-weather-card-forecast/city-weather-card-forecast.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CityWeatherCardDailyForecastComponent } from '@components/city-weather/city-weather-card-daily-forecast/city-weather-card-daily-forecast.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CityWeatherCardHourlyForecastComponent } from '@components/city-weather/city-weather-card-hourly-forecast/city-weather-card-hourly-forecast.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule, PageHeaderComponent, CityWeatherCardForecastComponent, MatProgressSpinnerModule, CityWeatherCardDailyForecastComponent, MatTabsModule, CityWeatherCardHourlyForecastComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  private weatherService = inject(WeatherService);
  private activatedRoute = inject(ActivatedRoute);
  id: any;

  cityWeatherForecast!: CityWeatherForecast;

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.weatherService.searchWeatherDataForecast(this.id).subscribe((city: CityWeatherForecast) => {
      this.cityWeatherForecast = city;
      console.log(this.cityWeatherForecast);
    });


  }
}
