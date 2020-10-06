import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="form-inline change-city">
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Change city"
            autoComplete="off"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-sm">
          <i className="fas fa-search"></i>
        </button>
        <button
          type="submit"
          className="btn btn-primary btn-sm current-location-button"
        >
          <i className="fas fa-location-arrow"></i>
        </button>
        <div className="cel-fahr">
          <a href="/" className="active farLink">
            °F
          </a>
          <a href="/" className="celLink">
            °C
          </a>
        </div>{" "}
      </form>
    </div>
  );
}
