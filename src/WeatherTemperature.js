import React, { useState } from "react";
import "./styles/WeatherTemperature.css";
import "./styles/App.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  const convertTemperature = (temperature, unit) => {
    if (unit === "celsius") {
      return temperature;
    } else if (unit === "fahrenheit") {
      return (temperature * 9 / 5) + 32;
    }
  };

  const temperature = convertTemperature(props.celsius, unit);

  return (
    <div className="WeatherTemperature">
      <span className="temperature">{Math.round(temperature)}</span>
      <span className="unit">
        <a
          href="./"
          onClick={() => setUnit("celsius")}
          className={unit === "celsius" ? "active" : ""}
        >
          °C
        </a>{" "}
      </span>
      <span className="unit">
        <a
          href="./"
          onClick={() => setUnit("fahrenheit")}
          className={unit === "fahrenheit" ? "active" : ""}
        >
          °F
        </a>
      </span>
    </div>
  );
}

