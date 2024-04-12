import React from "react";
// import axios from "axios"; //
import "./App.css";
import "./Weather.css";

export default function Search() {
  return (
    <div className="weatherApp">
      <div className="Header">
        <header>
          <p className="dayAndTime">{"Last updated: Saturday, 13:31"}</p>
          <form className="searchForm">
            <input
              type="search"
              placeholder="Enter a city ..."
              required
              className="searchFormInput"
            />
            <input type="submit" value="Search" className="searchFormButton" />
          </form>
        </header>
      </div>
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
          <div className="weatherForecastHeading">
            The next few days in [city]:
          </div>
          <div className="weatherForecast">This is where the forecast goes</div>
        </main>
      </div>
      <div className="Footer">
        <footer>
          {"This project was coded by "}
          <a
            href="https://julie-makes-stuff.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Julie Didriksen
          </a>
          {", while she was listening to "}
          <a
            href="https://open.spotify.com/playlist/37i9dQZF1EIfEadw4iTGUl?si=de7d6ec8451d4322"
            target="_blank"
            rel="noreferrer"
          >
            this playlist.
          </a>{" "}
          It is open-sourced on{" "}
          <a
            href="https://github.com/jkdcode/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://greenweatherapp.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
