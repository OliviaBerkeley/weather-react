import React from "react";
import Search from "./Search";
import Weather from "./Weather";
import "./App.css";
import "./Weather.css";
import "./Search.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <Weather />
      </div>{" "}
      <p className="coded-by">
        <a
          href="https://github.com/OliviaBerkeley/weather-react"
          target="_blank"
          rel="noopener noreferrer"
          className="git-hub-link"
        >
          Open-source code
        </a>{" "}
        by{" "}
        <a
          href="https://github.com/OliviaBerkeley"
          target="_blank"
          rel="noopener noreferrer"
          className="git-hub-profile"
        >
          Olivia Goodwin
        </a>
      </p>
    </div>
  );
}

export default App;
