import { Component, inject, OnInit } from '@angular/core';
import { WeatherService } from '../../../services/weather.service';
import { CommonModule } from '@angular/common';
import { CityWeather } from '../../../models/city-weather.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-city-weather-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './city-weather-card.component.html',
  styleUrl: './city-weather-card.component.sass'
})
export class CityWeatherCardComponent implements OnInit {
  private weatherService = inject(WeatherService);
  weathers: CityWeather[] = [];

  ngOnInit() {
    this.weatherService.weatherData$.subscribe(res => {
      this.weathers = res
      console.log(res);
    })
  }
}
