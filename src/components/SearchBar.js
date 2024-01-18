import React, { useState } from 'react';

import WeatherCard from './WeatherCard';

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
            const response = await fetch(
                `http://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${apiKey.apiKey}`
            );
            const data = await response.json();
            console.log(data);
            if (data.cod === '404') {
                setWeatherData(null);
            } else {
                setWeatherData(data);
            }
        } catch (error) {
            console.error('Error fetching weather data', error);
            setWeatherData(null);
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
            {/* <WeatherCard weatherData={testWeatherData} /> */}
            {weatherData && <WeatherCard weatherData={weatherData} />}
        </div>
    );
};

export default SearchBar;