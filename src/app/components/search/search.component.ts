import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
import { WeatherService } from '../../services/weather.service';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.sass'
})

export class SearchComponent {
  private weatherService = inject(WeatherService);

  searchForm!: FormGroup;

  constructor(private fb: FormBuilder, private service: WeatherService) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      city: [null, Validators.required]
    });
  }

  searchWeather() {
    this.service.searchWeatherData(this.searchForm.get(['city'])!.value).subscribe((city) => {
      this.service.updateWeatherData(city);
    })
  }

  // searchCity() {
  //   this.service.searchCityNames(this.searchForm.get(['city'])!.value).subscribe((cityNames) => {

  //   })
  // }
}
