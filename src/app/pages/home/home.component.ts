import { Component } from '@angular/core';
import { SearchComponent } from '../../components/search/search.component';
import { CityWeatherListComponent } from '../../components/city-weather/city-weather-list/city-weather-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, CityWeatherListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
