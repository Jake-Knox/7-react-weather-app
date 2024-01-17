import React from "react";

function WeatherCard({ weatherData }) {
    return (
        <div className="weather-card">
            <h2>{weatherData.name}</h2>
            <p>Weather: {weatherData.weather.main}</p>
            <p>Temperature: {weatherData.main.temp}°C</p>
            {/* Add more details as needed */}
        </div>
    );
}

export default WeatherCard;