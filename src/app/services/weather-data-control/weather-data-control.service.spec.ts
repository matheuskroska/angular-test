import { TestBed } from '@angular/core/testing';

import { WeatherDataControlService } from '../weather-data-control/weather-data-control.service';
import { CityWeather } from '@models/city-weather.model';

describe('WeatherDataControlService', () => {
  let service: WeatherDataControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherDataControlService);
  });

  it('creates a service', () => {
    expect(service).toBeTruthy();
  });

  describe("updateData", () => {

    it("should update the city data", () => {
      const date = new Date();

      const city: CityWeather = {
        location: {
          name: "Test",
          region: "Test",
          country: "Test",
          lat: 0,
          lon: 0,
          tz_id: "Test",
          localtime_epoch: 0,
          localtime: "Test",
          url: "Test",
          updatedAt: date.toLocaleString("pt-BR", {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            timeZone: "America/Sao_Paulo"
          }),
        },
        current: {
          last_updated_epoch: 0,
          last_updated: "Test",
          temp_c: 0,
          temp_f: 0,
          is_day: 0,
          condition: {
            text: "Test",
            icon: "Test",
            code: 0
          },
          wind_mph: 0,
          wind_kph: 0,
          wind_degree: 0,
          wind_dir: "Test",
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
          gust_kph: 0
        }
      };

      service.updateCityWeather(city);
      expect(service.weatherData$.subscribe(data => {
        expect(data).toEqual([city]);
      }));

    });


  });

});
