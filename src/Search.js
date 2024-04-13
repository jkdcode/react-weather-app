import React from "react";
import "./App.css";

export default function Header() {
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
    </div>
  );
}
