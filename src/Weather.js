import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let unit = "metric";
    let apiKey = "515c9ddbeb3cda9061acfab71031839e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div className="SearchEngine">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for a city..."
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Description: {weather.description}</li>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Wind speed: {weather.wind} km/h</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>
            <img src={weather.icon} alt="Weather Icon" />{" "}
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
