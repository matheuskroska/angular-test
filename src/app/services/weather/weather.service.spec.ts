import { TestBed } from "@angular/core/testing";
import { WeatherService } from "./weather.service"
import { HttpTestingController, HttpClientTestingModule }
  from '@angular/common/http/testing';
import { City } from "@models/city.model";
import { environment } from "@environments/environment";
import { CityWeather } from "@models/city-weather.model";
import { CityWeatherForecast } from "@models/city-weather-forecast.model";

describe('WeatherService', () => {
  let service: WeatherService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService]
    });
    service = TestBed.inject(WeatherService);
    httpTestingController = TestBed.inject(HttpTestingController);

  });

  afterEach(() => {
    httpTestingController.verify();
  });


  describe('searchCityNames', () => {

    it("should be correct API URL", () => {
      service.searchCityNames('curitiba').subscribe((city) => {
        expect(city).toBeTruthy();
      });
      const req = httpTestingController.expectOne('http://api.weatherapi.com/v1/search.json?q=curitiba');
      expect(req.request.url).toEqual('http://api.weatherapi.com/v1/search.json?q=curitiba');
    }
    );

    it('should return a city', () => {
      let cities: City[] | undefined;
      service.searchCityNames('curitiba').subscribe((city) => {
        cities = city;
      });
      const req = httpTestingController.expectOne('http://api.weatherapi.com/v1/search.json?q=curitiba');
      req.flush([{
        id: 1,
        name: 'Curitiba',
        region: 'Parana',
        country: 'Brasil',
        lat: -25.42,
        lon: -49.29,
        url: 'curitiba'
      }]);
      expect(cities).toEqual([
        {
          id: 1,
          name: 'Curitiba',
          region: 'Parana',
          country: 'Brasil',
          lat: -25.42,
          lon: -49.29,
          url: 'curitiba'
        }
      ]);
    });

    it("should match the correct API Key", () => {
      service.searchCityNames('curitiba').subscribe((city) => {
        expect(city).toBeTruthy();
      });
      const req = httpTestingController.expectOne('http://api.weatherapi.com/v1/search.json?q=curitiba');
      expect(req.request.headers.get('key')).toEqual(environment.apiKey);
    });

    it("should be a GET request", () => {
      service.searchCityNames('curitiba').subscribe((city) => {
        expect(city).toBeTruthy();
      });
      const req = httpTestingController.expectOne('http://api.weatherapi.com/v1/search.json?q=curitiba');
      expect(req.request.method).toEqual('GET');
    });

  });

  describe('searchWeatherData', () => {

    it("should be correct API URL", () => {
      service.searchWeatherData('curitiba').subscribe((city) => {
        expect(city).toBeTruthy();
      });
      const req = httpTestingController.expectOne('http://api.weatherapi.com/v1/current.json?q=curitiba&lang=pt');
      expect(req.request.url).toEqual('http://api.weatherapi.com/v1/current.json?q=curitiba&lang=pt');
    });

    it("should return current city weather", () => {
      let city: CityWeather | undefined;
      service.searchWeatherData('curitiba').subscribe((cityWeather) => {
        city = cityWeather;
      });
      const req = httpTestingController.expectOne('http://api.weatherapi.com/v1/current.json?q=curitiba&lang=pt');
      req.flush({
        location: {
          name: 'Curitiba',
          region: 'Parana',
          country: 'Brasil',
          lat: -25.42,
          lon: -49.29,
          url: 'curitiba',
        },
        current: {
          temp_c: 20,
          temp_f: 68,
          condition: {
            text: 'Sunny',
            icon: 'http://cdn.weatherapi.com/weather/64x64/day/113.png'
          },
        }
      });
      expect(city).toEqual({
        location: {
          name: 'Curitiba',
          region: 'Parana',
          country: 'Brasil',
          lat: -25.42,
          lon: -49.29,
          url: 'curitiba'
        },
        current: {
          temp_c: 20,
          temp_f: 68,
          condition: {
            text: 'Sunny',
            icon: 'http://cdn.weatherapi.com/weather/64x64/day/113.png'
          }
        }
      });
    });

    it("should match the correct API Key", () => {
      service.searchWeatherData('curitiba').subscribe((city) => {
        expect(city).toBeTruthy();
      });
      const req = httpTestingController.expectOne('http://api.weatherapi.com/v1/current.json?q=curitiba&lang=pt');
      expect(req.request.headers.get('key')).toEqual(environment.apiKey);
    });

    it("should be a GET request", () => {
      service.searchWeatherData('curitiba').subscribe((city) => {
        expect(city).toBeTruthy();
      });
      const req = httpTestingController.expectOne('http://api.weatherapi.com/v1/current.json?q=curitiba&lang=pt');
      expect(req.request.method).toEqual('GET');
    });

  });

  describe('searchWeatherDataForecast', () => {


    it("should be correct API URL", () => {
      service.searchWeatherDataForecast('curitiba').subscribe((city) => {
        expect(city).toBeTruthy();
      });
      const req = httpTestingController.expectOne('http://api.weatherapi.com/v1/forecast.json?q=curitiba&days=7&lang=pt');
      expect(req.request.url).toEqual('http://api.weatherapi.com/v1/forecast.json?q=curitiba&days=7&lang=pt');
    });

    it("should return forecast city weather", () => {
      let city: CityWeatherForecast | undefined;
      service.searchWeatherDataForecast('curitiba').subscribe((cityWeather) => {
        city = cityWeather;
      });

      const req = httpTestingController.expectOne('http://api.weatherapi.com/v1/forecast.json?q=curitiba&days=7&lang=pt');
      req.flush({
        location: {
          name: 'Curitiba',
          region: 'Parana',
          country: 'Brasil',
          lat: -25.42,
          lon: -49.29,
          url: 'curitiba',
        },
        forecast: {
          forecastday: [
            {
              date: '2021-09-30',
              day: {
                maxtemp_c: 20,
                maxtemp_f: 68,
                mintemp_c: 10,
                mintemp_f: 50,
                condition: {
                  text: 'Sunny',
                  icon: 'http://cdn.weatherapi.com/weather/64x64/day/113.png'
                },
              }
            }
          ]
        },
        current: {
          temp_c: 20,
          temp_f: 68,
          condition: {
            text: 'Sunny',
            icon: 'http://cdn.weatherapi.com/weather/64x64/day/113.png'
          },
        }

      });

      expect(city).toEqual({
        location: {
          name: 'Curitiba',
          region: 'Parana',
          country: 'Brasil',
          lat: -25.42,
          lon: -49.29,
          url: 'curitiba'
        },
        forecast: {
          forecastday: [
            {
              date: '2021-09-30',
              day: {
                maxtemp_c: 20,
                maxtemp_f: 68,
                mintemp_c: 10,
                mintemp_f: 50,
                condition: {
                  text: 'Sunny',
                  icon: 'http://cdn.weatherapi.com/weather/64x64/day/113.png'
                }
              }
            }
          ]
        },
        current: {
          temp_c: 20,
          temp_f: 68,
          condition: {
            text: 'Sunny',
            icon: 'http://cdn.weatherapi.com/weather/64x64/day/113.png'
          }
        }
      });

    });


    it("should match the correct API Key", () => {
      service.searchWeatherDataForecast('curitiba').subscribe((city) => {
        expect(city).toBeTruthy();
      });
      const req = httpTestingController.expectOne('http://api.weatherapi.com/v1/forecast.json?q=curitiba&days=7&lang=pt');
      expect(req.request.headers.get('key')).toEqual(environment.apiKey);
    });

    it("should be a GET request", () => {
      service.searchWeatherDataForecast('curitiba').subscribe((city) => {
        expect(city).toBeTruthy();
      });

      const req = httpTestingController.expectOne('http://api.weatherapi.com/v1/forecast.json?q=curitiba&days=7&lang=pt');
      expect(req.request.method).toEqual('GET');
    });
  });

});
