import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import { WeatherService } from '../../services/weather.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AsyncPipe } from '@angular/common';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { City } from '../../models/city.model';
import { Observable } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe, MatIconModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})

export class SearchComponent {
  private weatherService = inject(WeatherService);

  control = new FormControl('');
  cities$!: Observable<City[]>;

  ngOnInit() {
    this.cities$ = this.control.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      filter(value => value!.length > 3),
      switchMap(value => this.weatherService.searchCityNames(value || ''))
    );
  }

  onCitySelected(cityName: string) {
    this.weatherService.searchWeatherData(cityName).pipe(
      map(city => (this.weatherService.prepareCityWeatherData(city, cityName)))
    ).subscribe(updatedCity => {
      this.weatherService.getWeatherData(updatedCity);
      this.control.reset("");
    });
  }
}
