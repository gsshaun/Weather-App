//GeoDB URL
export const LOCATION_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions"

//OpenWeather URL
export const CURRENT_WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather"
export const FIVE_DAYS_WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/forecast"

//Icon URL
export const OPENWEATHER_ICON_URL = "http://openweathermap.org/img/wn/"

// GeoDB Options
export const OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.X_RapidAPI_Key,
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};