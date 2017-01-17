import axios from 'axios'

const API_KEY = '783ec3f5a03a85f95a2f1069522d172a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

// Action creator that fetch data
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url)
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
