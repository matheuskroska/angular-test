import { Component } from '@angular/core';
import { CityWeatherCardComponent } from '../city-weather-card/city-weather-card.component';

@Component({
  selector: 'app-city-weather-list',
  standalone: true,
  imports: [CityWeatherCardComponent],
  templateUrl: './city-weather-list.component.html',
  styleUrl: './city-weather-list.component.scss'
})
export class CityWeatherListComponent {

}
