import { Service } from "./Service";

let instance = null;

export class WeatherService extends Service {
    constructor() {
        super();
        this.API_PATH = `${WeatherService.getProxy()}/https://www.metaweather.com/api`;

        return instance ? instance : (instance = this);
    }

    getLocationWoeid(query) {
        return `${this.API_PATH}/location/search/?query=${query}`;
    }

    getLocationWeather(woeid) {
        return `${this.API_PATH}/location/${woeid}`;
    }

    getWoeid(location) {
        return fetch(this.getLocationWoeid(location)).then((response) =>
            response.json()
        );
    }

    getForecast(woeid) {
        return fetch(this.getLocationWeather(woeid)).then((response) =>
            response.json()
        );
    }
}
