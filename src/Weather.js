import React from "react";

import "./Weather.css";

export default function Weather() {
  let defaultData = {
    city: "Tacoma",
    date: "Friday",
    time: "2:11 a.m.",
    description: "Smoky",
    temp: 75,
    feelsLike: 72,
    clouds: 50,
    humdidity: 80,
    wind: 5,
  };
  return (
    <div className="Weather">
      <div className="header">
        <h1 className="city">{defaultData.city}</h1>
        <span className="day-time">
          {defaultData.date}, {defaultData.time}
        </span>
      </div>

      <div className="row current-forecast">
        <div className="col-md-12 current-temp">
          <p className="description">{defaultData.description}</p>

          <h3>
            — <span>{defaultData.temp}</span>° —{" "}
          </h3>

          <p>
            <small>
              Feels like <span>{defaultData.feelsLike}</span>°
            </small>
          </p>

          <img
            className="main-temp-icon"
            src={require("./images/at_home.svg")}
            alt="Nature on a phone screen illustration."
          />

          <ul>
            <li className="clouds">
              <i className="fas fa-cloud weather-icon" /> Clouds —{" "}
              {defaultData.clouds}%
            </li>
            <li className="humidity">
              <i className="fas fa-water weather-icon" /> Humidity —
              {defaultData.humdidity}%
            </li>
            <li className="wind">
              <i className="fas fa-wind weather-icon" /> Windspeed —{" "}
              {defaultData.wind} mph
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
