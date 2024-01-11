import { Component } from '@angular/core';
import { CityWeatherDetailComponent } from '../../components/city-weather/city-weather-detail/city-weather-detail.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CityWeatherDetailComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.sass'
})
export class DetailComponent {
    id: any;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
    }
}
