import React from "react";
import "./App.css";

export default function Footer() {
  return (
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
        . It is open-sourced on{" "}
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
        . This React project was converted from a{" "}
        <a
          href="https://julies-weather-app.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          vanilla JS weather app
        </a>{" "}
        that I previously made.
      </footer>
    </div>
  );
}
