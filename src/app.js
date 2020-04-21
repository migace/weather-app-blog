import React, { useState } from "react";
import ReactDOM from "react-dom";

import { WeatherService } from "./services/WeatherService";
import { WeatherInput } from "./WeatherInput";
import { WeatherTable } from "./WeatherTable";

const App = () => {
    const [forecastData, setForecastData] = useState();

    const searchHandler = async (location) => {
        const weatherService = new WeatherService();
        const { woeid } = (await weatherService.getWoeid(location))[0];
        const forecastData = await weatherService.getForecast(woeid);

        setForecastData(forecastData);
    };

    return (
        <>
            <h1>Hello World!</h1>
            <WeatherInput searchHandler={searchHandler} searchText="Search" />
            {forecastData && (
                <WeatherTable forecast={forecastData.consolidated_weather} />
            )}
        </>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
