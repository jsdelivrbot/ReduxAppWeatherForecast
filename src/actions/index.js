import axios from 'axios'

const API_KEY = '';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

// Action creator that fetch data
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request:', request);

  return {
    // Before request is entirely passed to reducer, Redux-promise middleware
    // checks action whether it contains "PRomise" as a payload.
    // If yes, then middleware stops the action, resolve the PRomise
    // and then creates a new action and send it to reducers.
    type: FETCH_WEATHER,
    payload: request
  };
}
