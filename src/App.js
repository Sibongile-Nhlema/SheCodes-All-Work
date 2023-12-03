import React from "react";
import MainWeather from "./MainWeather";
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header></header>
      <section className= "weather-app">
        <MainWeather defaultCity="Durban"/>
      </section>
      <footer>
        This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/sibongile-nhlema/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sibongile Nthlema
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Sibongile-Nhlema/SheCodes-All-Work/tree/main/my-react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://main--astonishing-paletas-b30875.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
      </footer>
    </div>
  );
}

export default App;
