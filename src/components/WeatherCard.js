import React from "react";

function WeatherCard({ data }) {

    return (
        <div>
            <h2>{data.name}</h2>
            <p>Temperature: {data.main.temp}°C</p>
            {/* Add more details as needed */}
        </div>
    );
};

export default WeatherCard;