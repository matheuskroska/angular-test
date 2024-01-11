import { Component } from '@angular/core';
import { CityWeatherDetailComponent } from '../../components/city-weather-detail/city-weather-detail.component';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CityWeatherDetailComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.sass'
})
export class DetailComponent {

}
