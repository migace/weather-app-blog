import PropTypes from "prop-types";
import React, { useState } from "react";

export const WeatherInput = ({ searchHandler, searchText = "" }) => {
    const [inputValue, setInputValue] = useState("");

    return (
        <div>
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter city name, i.e. Warsaw"
            />
            {searchHandler && (
                <button onClick={() => searchHandler(inputValue)}>
                    {searchText}
                </button>
            )}
        </div>
    );
};

WeatherInput.propTypes = {
    searchText: PropTypes.string,
    searchHandler: PropTypes.func,
};
