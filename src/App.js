import './App.css';
import Search from './components/search/search';
import CurrentWeather from "./components/weather/weather";
import {CURRENT_WEATHER_API_URL, FIVE_DAYS_WEATHER_API_URL} from "./const/api_const"
import { useState } from 'react';

function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [weatherForecast, setWeatherForecast] = useState(null);

  const handleSearchData = (searchData) => {
    const [lat, long] = searchData.value.split(" ");

    const get_weather_now = fetch(`${CURRENT_WEATHER_API_URL}?lat=${lat}&lon=${long}&appid=${process.env.OPENWEATHER_KEY}&units=metric`);
    const get_weather_five_days = fetch(`${FIVE_DAYS_WEATHER_API_URL}?lat=${lat}&lon=${long}&appid=${process.env.OPENWEATHER_KEY}&units=metric`);

    Promise.all([get_weather_now, get_weather_five_days])
    .then(async (response) => {
      const weather_now = await response[0].json();
      const weather_five_days = await response[1].json();

      setCurrentWeather({city: searchData.label, ...weather_now});
      setWeatherForecast({city: searchData.label, ...weather_five_days});
    })
    .catch((error) => console.log(error))
  }

  return (
    <div className="container">
      <Search onSearchChange={handleSearchData} />
      {currentWeather && <CurrentWeather weather_data = {[currentWeather, weatherForecast]}/>}
    </div>
  );
}

export default App;
