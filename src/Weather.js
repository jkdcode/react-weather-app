import React from "react";
// import axios from "axios"; //
import "./App.css";
import "./Weather.css";

export default function Search() {
  return (
    <div className="weatherApp">
      <div className="Main">
        <main>
          <div className="weatherAppData">
            <div className="weatherAppDetails">
              <h1 className="weatherAppCity">Oslo</h1>
              <p className="weatherDescription">Light rain</p>
              <p>
                Humidity: <span className="humidityData">72%</span>
                <br />
                Wind: <span className="windData">4.72 km/h</span>
              </p>
            </div>
            <div className="weatherAppTemperatureContainer">
              <div className="weatherAppTemperature">
                <div className="weatherAppTemperatureValue">6</div>
                <div className="weatherAppTemperatureUnit">°C</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
