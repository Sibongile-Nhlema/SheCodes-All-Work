import React from "react";
import Weather from "./Weather";
import NearbyCities from "./NearbyCities";
import './App.css';

function App() {
  return (
    <div className="App">
      <header>The Awesome Weather App</header>
      <section className= "weather-app">
        <NearbyCities />
        <Weather defaultCity="Durban"/>
      </section>
      <footer>
        This project was coded by{" "}
          <a
            href="https://www.delac.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sibongile Nthlema
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/wecodeschool/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://suspicious-beaver-111c4d.netlify.com/"
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
