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
      </div>
    </div>
  );
}

export default App;
