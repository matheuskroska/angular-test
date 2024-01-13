import { Component } from '@angular/core';
import { CityWeatherDetailComponent } from '../../components/city-weather/city-weather-detail/city-weather-detail.component';
import { ActivatedRoute } from '@angular/router';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CityWeatherDetailComponent, PageHeaderComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  id: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }
}
