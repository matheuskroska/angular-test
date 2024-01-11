import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-city-weather-detail',
  standalone: true,
  imports: [],
  templateUrl: './city-weather-detail.component.html',
  styleUrl: './city-weather-detail.component.sass'
})
export class CityWeatherDetailComponent {
  @Input() id: any;

  ngOnInit() {
    console.log(this.id);
  }
}
