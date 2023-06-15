import React from "react";
import "../styles/ForecastDetails.css";

function ForecastDetails({ forecast }) {
  const { date, humidity, temperature, wind } = forecast;
  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-details">
      <div className="forecast-details_date">{formattedDate}</div>
      <div className="forecast-details_max-temp">
        <strong>Max temperature:</strong> {temperature.max}&deg;C
      </div>
      <div className="forecast-details_min-temp">
        <strong>Min temperature:</strong> {temperature.min}&deg;C
      </div>
      <div className="forecast-details_humidity">
        <strong>Humidity:</strong> {humidity} %
      </div>
      <div className="forecast-details_wind-speed">
        <strong>Wind Speed:</strong> {wind.speed} mph
      </div>
      <div className="forecast-details_wind-direction">
        <strong>Wind Speed:</strong> {wind.direction}
      </div>
    </div>
  );
}

export default ForecastDetails;
