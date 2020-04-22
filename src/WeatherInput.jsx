import PropTypes from "prop-types";
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

export const WeatherInput = ({ searchHandler, searchText = "" }) => {
    const [inputValue, setInputValue] = useState("");

    return (
        <Grid container spacing={2} alignItems="center" justify="center">
            <Grid item>
                <TextField
                    id="standard-basic"
                    label="Your location"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </Grid>
            {searchHandler && (
                <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => searchHandler(inputValue)}
                    >
                        {searchText}
                    </Button>
                </Grid>
            )}
        </Grid>
    );
};

WeatherInput.propTypes = {
    searchText: PropTypes.string,
    searchHandler: PropTypes.func,
};
