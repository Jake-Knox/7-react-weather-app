import React, { useState } from 'react';

function SearchBar() {
    const [location, setLocation] = useState('');

    const handleSearch = () => {
        // Fetch weather data based on location
        // Update the state and trigger an action to fetch data
    }

    return (
        <div>
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