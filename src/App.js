import React from 'react';
import SearchBar from './components/SearchBar';

import config from './config';

import './App.scss';

const apiKey = config.apiKey;

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchBar className="search-bar" apiKey={apiKey} />
      {/*  */}
    </div>
  );
}

export default App;
