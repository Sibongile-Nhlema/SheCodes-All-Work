import React from "react";
import Weather from "./Weather";
import NearbyCities from "./NearbyCities";
import './App.css';

function App() {
  return (
    <div className="App">
      <header></header>
      <section className= "weather-app">
        <NearbyCities />
        <Weather defaultCity="Durban"/>
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
            href="https://sparkling-pasca-2dd4b5.netlify.app/"
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
