import React from "react";

function WeatherCard({ weatherData }) {

    // Extracting values from the weatherData object
    const cityName = weatherData.city.name;
    const country = weatherData.city.country;

    // Assuming the first item in the list represents the current weather
    const currentWeather = weatherData.list[0];
    const temperature = currentWeather.main.temp;
    const weatherDescription = currentWeather.weather[0].description;

    return (
        <div className="weather-card">
            <h2>{cityName}, {country}</h2>
            <h3>Current Weather:</h3>
            <p>Temperature: {temperature}°C</p>
            <p>Weather: {weatherDescription}</p>
            {/* Add more details as needed */}
        </div>
    );
}

export default WeatherCard;