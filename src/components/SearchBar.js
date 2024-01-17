import React, { useState } from 'react';

import WeatherCard from './WeatherCard';

// `http://api.openweathermap.org/data/2.5/weather?q={location}&units=metric&appid={API_KEY}`

const testWeatherData = {
    name: "London",
    weather: {
        main: "Rain",
    },
    main: {
        temp: "2.01",
    },
}

function SearchBar(apiKey) {
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const handleSearch = async () => {
        // Fetch weather data -> Update state
        try {
            console.log(apiKey.apiKey);
            const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&appid=${apiKey.apiKey}`);
            const data = await response.json();
            console.log(data);
            setWeatherData(weatherData);

        } catch (error) {
            console.error('Error fetching weather data', error);
            setWeatherData(null);
            console.log(weatherData);
        }
    };

    return (
        <div className='search-container'>
            <input
                type='text'
                placeholder='Enter a city or postcode here'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <WeatherCard weatherData={testWeatherData} />

            {/* {weatherData && <WeatherCard weatherData={weatherData} />} */}
        </div>
    );
};

export default SearchBar;