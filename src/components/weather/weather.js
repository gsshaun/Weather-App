import "./weather.css";
import { OPENWEATHER_ICON_URL } from "../../const/api_const"

const currentWeather = ({ weather_data }) => {

  const WEEK_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const day = new Date().getDay();
  const fiveDays = WEEK_DAYS.slice(day, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, day));

  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{weather_data[0].city}</p>
          <p className="weather-desp">{weather_data[0].weather[0].description}</p>
        </div>
        <img alt="weather" className="weather-icon" src={`${OPENWEATHER_ICON_URL}${weather_data[0].weather[0].icon}@2x.png`} />
      </div>
      <div className="bottom">
        <p className="temperature">{weather_data[0].main.temp}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label title">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">{weather_data[0].main.feels_like}°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{weather_data[0].main.humidity}</span>
          </div>
        </div>
      </div>
      <div className="foreCast">
        {weather_data[1]?.list.splice(0, 5).map((item, index) => {
          return (
            <div className="foreCast-item" key={index}>
              <div>
                <p className="foreCast-item-day">{fiveDays[index]}</p>
                <p className="foreCast-item-temp">{item.main.temp}°C</p>
              </div>
              <img alt="weather" src={`${OPENWEATHER_ICON_URL}${item.weather[0].icon}@2x.png`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default currentWeather;
