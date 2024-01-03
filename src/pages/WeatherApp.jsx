import React, { useState, useEffect } from 'react';
import SearchBarOne from '../components/Forms/searchOne';
import WeatherDetails from '../lib/weatherData';

const WeatherApp = () => {
  const apiKey = '33d58d550406b965a4da644aee385490';
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

  const [weatherData, setWeatherData] = useState(null);

  const checkWeather = async (city) => {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
    setWeatherData(data);
  };

  // Fetch weather data for the default location when the component mounts
  useEffect(() => {
    const defaultLocation = 'Lagos';
    checkWeather(defaultLocation);
  }, []);

  return (
    <div className="card text-white py-10 px-8 text-center rounded-md mb-20 ">
      {/* SearchBar component */}
      <SearchBarOne onSearch={checkWeather} />

      {/* Display weather details if data is available */}
      {weatherData && <WeatherDetails weatherData={weatherData} />}
    </div>
  );
};

export default WeatherApp;
