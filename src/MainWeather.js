import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import './styles/MainWeather.css';
import CurrentForecast from "./CurrentForecast";
import NearbyCities from "./NearbyCities";


export default function MainWeather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [nearbyCities, setNearbyCities] = useState([]);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
    fetchNearbyCities(response.data.coord);
    console.log(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    setCity("");
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "62231151ce343c4d68652e1617efc22f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function fetchNearbyCities(coordinates) {
  const apiKey = "62231151ce343c4d68652e1617efc22f";
  const apiUrl = `https://api.openweathermap.org/data/2.5/find?lat=${coordinates.lat}&lon=${coordinates.lon}&cnt=5&appid=${apiKey}`;

  axios.get(apiUrl).then((response) => {
    const cities = response.data.list.map((city) => city.name);
    setNearbyCities(cities);
  });
}

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <NearbyCities nearbyCities={nearbyCities}  />
        <form className="search-form container p-2" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city or country.."
                className="form-control no-corner"
                autoFocus="on"
                value={city}
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100 no-corner btn-search"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <hr />
        <CurrentForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}