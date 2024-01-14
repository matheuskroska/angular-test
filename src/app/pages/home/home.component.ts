import { Component, inject } from '@angular/core';
import { SearchComponent } from '@components/search/search.component';
import { PageHeaderComponent } from '@components/page-header/page-header.component';
import { WeatherService } from '@services/weather.service';
import { CityWeather } from '@models/city-weather.model';
import { CityWeatherCardComponent } from '@components/city-weather/city-weather-card/city-weather-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, PageHeaderComponent, CityWeatherCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private weatherService = inject(WeatherService);

  weathers: CityWeather[] = [];


  ngOnInit() {
    this.weatherService.weatherData$.subscribe(res => {
      this.weathers = res;
    })

  }
}
