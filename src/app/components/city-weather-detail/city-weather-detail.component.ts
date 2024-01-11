import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city-weather-detail',
  standalone: true,
  imports: [],
  templateUrl: './city-weather-detail.component.html',
  styleUrl: './city-weather-detail.component.sass'
})
export class CityWeatherDetailComponent {
  id: any;
  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }
}
