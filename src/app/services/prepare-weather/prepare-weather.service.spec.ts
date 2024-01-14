import { TestBed } from '@angular/core/testing';

import { PrepareWeatherService } from './prepare-weather.service';
import { CityWeather } from '@models/city-weather.model';

describe('PrepareWeatherService', () => {
  let service!: PrepareWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrepareWeatherService]
    });
    service = TestBed.inject(PrepareWeatherService);
  });

  it('creates a service', () => {
    expect(service).toBeTruthy();
  });


  describe('prepareWeather', () => {

    const date = new Date();

    it('should return a prepared CityWeather array of objects', () => {
      const preparedData: CityWeather = {
        location: {
          name: 'name',
          region: 'region',
          country: 'country',
          lat: 0,
          lon: 0,
          tz_id: 'tz_id',
          localtime_epoch: 0,
          localtime: 'localtime',
          updatedAt: date.toLocaleString("pt-BR", {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            timeZone: "America/Sao_Paulo"
          }),
          url: 'url',
        },
        current: {
          last_updated_epoch: 0,
          last_updated: 'last_updated',
          temp_c: 0,
          temp_f: 0,
          is_day: 0,
          condition: {
            text: 'text',
            icon: 'icon',
            code: 0,
          },
          wind_mph: 0,
          wind_kph: 0,
          wind_degree: 0,
          wind_dir: 'wind_dir',
          pressure_mb: 0,
          pressure_in: 0,
          precip_mm: 0,
          precip_in: 0,
          humidity: 0,
          cloud: 0,
          feelslike_c: 0,
          feelslike_f: 0,
          vis_km: 0,
          vis_miles: 0,
          uv: 0,
          gust_mph: 0,
          gust_kph: 0,
        },
      }
      const result = service.prepareCityWeatherData(preparedData, 'url');

      expect(result).toEqual(preparedData);


    });


  });

});
