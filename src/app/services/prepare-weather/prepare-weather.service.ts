import { Injectable } from '@angular/core';
import { CityWeather } from '@models/city-weather.model';

@Injectable({
  providedIn: 'root'
})
export class PrepareWeatherService {

  prepareCityWeatherData(data: CityWeather, url: string) {
    const date = new Date();

    return {
      ...data,
      location: {
        ...data.location,
        url: url,
        updatedAt: date.toLocaleString("pt-BR", {
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "America/Sao_Paulo"
        }),
      }
    }
  }
}
