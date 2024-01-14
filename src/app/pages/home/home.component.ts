import { Component, inject } from '@angular/core';
import { SearchComponent } from '@components/search/search.component';
import { PageHeaderComponent } from '@components/page-header/page-header.component';
import { CityWeather } from '@models/city-weather.model';
import { CityWeatherCardComponent } from '@components/city-weather/city-weather-card/city-weather-card.component';
import { WeatherDataControlService } from '@services/weather-data-control/weather-data-control.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, PageHeaderComponent, CityWeatherCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private weatherDataControlService = inject(WeatherDataControlService);

  weathers: CityWeather[] = [];


  ngOnInit() {
    this.weatherDataControlService.weatherData$.subscribe(res => {
      this.weathers = res;
    })

  }
}
