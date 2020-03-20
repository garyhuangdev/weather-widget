import {
  GET_WEATHER,
  CHANGE_TEMP,
  CHANGE_WIND,
  CHANGE_TITLE,
  GET_FAILED,
  GEO_NOT_SUPPORTED,
  LOAD_WEATHER
} from '../actions/actionTypes';

const initialState = {
  isLoading: true,
  weatherData: '',
  title: '',
  temperatureType: 'celsius',
  windDisplay: 'display'
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_WEATHER:
      console.log('get weather');
      localStorage.setItem('weatherData', JSON.stringify(payload));
      return {
        ...state,
        weatherData: payload,
        isLoading: false
      };
    case GET_FAILED:
      alert('Error fetching new weather');
      return {
        ...state
      };
    case CHANGE_TITLE:
      return {
        ...state,
        title: payload
      };
    case CHANGE_WIND:
      return {
        ...state,
        windDisplay: payload
      };
    case CHANGE_TEMP:
      return {
        ...state,
        temperatureType: payload
      };
    case LOAD_WEATHER:
      return {
        ...state,
        weatherData: payload,
        isLoading: false
      };
    case GEO_NOT_SUPPORTED:
      alert('Browser does not support Geolocation api');
      return {
        ...state
      };
    default:
      return state;
  }
};
