import React, { useState } from "react";
import ReactDOM from "react-dom";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";

import { WeatherService } from "./services/WeatherService";
import { WeatherInput } from "./WeatherInput";
import { WeatherTable } from "./WeatherTable";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

const App = () => {
    const [forecastData, setForecastData] = useState();
    const classes = useStyles();

    const searchHandler = async (location) => {
        const weatherService = new WeatherService();
        const { woeid } = (await weatherService.getWoeid(location))[0];
        const forecastData = await weatherService.getForecast(woeid);

        setForecastData(forecastData);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Box mb={4}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            WeatherApp
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Container fixed>
                <Box mb={4}>
                    <WeatherInput
                        searchHandler={searchHandler}
                        searchText="Search"
                    />
                </Box>
                {forecastData && (
                    <WeatherTable
                        forecast={forecastData.consolidated_weather}
                    />
                )}
            </Container>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
