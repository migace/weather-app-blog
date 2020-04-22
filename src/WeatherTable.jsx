import PropTypes from "prop-types";
import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export const WeatherTable = ({ forecast }) => (
    <TableContainer component={Paper}>
        <Table aria-label="forecast">
            <TableHead>
                <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell align="right">State</TableCell>
                    <TableCell align="right">Abbr</TableCell>
                    <TableCell align="right">Wind speed</TableCell>
                    <TableCell align="right">Air pressure</TableCell>
                    <TableCell align="right">Humidity</TableCell>
                    <TableCell align="right">Predictability</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {forecast.map((day) => (
                    <TableRow key={day.id}>
                        <TableCell component="th" scope="row">
                            {day.applicable_date}
                        </TableCell>
                        <TableCell align="right">
                            {day.weather_state_name}
                        </TableCell>
                        <TableCell align="right">
                            {day.weather_state_abbr}
                        </TableCell>
                        <TableCell align="right">{day.wind_speed}</TableCell>
                        <TableCell align="right">{day.air_pressure}</TableCell>
                        <TableCell align="right">{day.humidity}</TableCell>
                        <TableCell align="right">
                            {day.predictability}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
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
