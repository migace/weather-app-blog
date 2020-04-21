import PropTypes from "prop-types";
import React from "react";

export const WeatherTable = ({ forecast }) => (
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>State</th>
                <th>Abbr</th>
                <th>Wind speed</th>
                <th>Air pressure</th>
                <th>Humidity</th>
                <th>Predictability</th>
            </tr>
        </thead>
        <tbody>
            {forecast.map((day) => (
                <tr key={day.id}>
                    <td>{day.applicable_date}</td>
                    <td>{day.weather_state_name}</td>
                    <td>{day.weather_state_abbr}</td>
                    <td>{day.wind_speed}</td>
                    <td>{day.air_pressure}</td>
                    <td>{day.humidity}</td>
                    <td>{day.predictability}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

WeatherTable.propTypes = {
    forecast: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            applicable_date: PropTypes.string.isRequired,
            weather_state_name: PropTypes.string.isRequired,
            weather_state_abbr: PropTypes.string.isRequired,
            wind_speed: PropTypes.number.isRequired,
            air_pressure: PropTypes.number.isRequired,
            humidity: PropTypes.number.isRequired,
            predictability: PropTypes.number.isRequired,
        })
    ).isRequired,
};
