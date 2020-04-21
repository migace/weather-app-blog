import React, { useState } from "react";
import ReactDOM from "react-dom";

import { WeatherService } from "./services/WeatherService";
import { WeatherInput } from "./WeatherInput";

const App = () => {
    const [weatherData, setWeatherData] = useState();

    const searchHandler = async (location) => {
        const weatherService = new WeatherService();
        const { woeid } = (await weatherService.getWoeid(location))[0];
        const forecastData = await weatherService.getForecast(woeid);

        setWeatherData(forecastData);
    };

    return (
        <>
            <h1>Hello World!</h1>
            <WeatherInput searchHandler={searchHandler} searchText="Search" />
            {weatherData && JSON.stringify(weatherData)}
        </>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
