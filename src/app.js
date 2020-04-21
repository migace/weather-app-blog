import noop from "lodash/noop";
import React from "react";
import ReactDOM from "react-dom";

import { WeatherInput } from "./WeatherInput";

const App = () => (
    <>
        <h1>Hello World!</h1>
        <WeatherInput searchHandler={noop} searchText="Search" />
    </>
);

ReactDOM.render(<App />, document.getElementById("app"));
