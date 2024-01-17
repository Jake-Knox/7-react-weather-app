import React, { useState } from 'react';

// `http://api.openweathermap.org/data/2.5/weather?q={location}&units=metric&appid={API_KEY}`

function SearchBar(apiKey) {
    const [location, setLocation] = useState('');

    const handleSearch = async () => {
        // Fetch weather data -> Update state
        try {
            console.log(apiKey.apiKey);
            const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&appid=${apiKey.apiKey}`);
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error fetching weather data', error);
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
        </div>
    );
};

export default SearchBar;