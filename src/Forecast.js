import React from "react";
import "./App.css";

export default function Forecast() {
  return (
    <div className="weatherForecastHeading">
      <div>The next few days in [city]:</div>
      <div className="weatherForecast">This is where the forecast goes</div>
    </div>
  );
}
