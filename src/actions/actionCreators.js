import {
  GET_WEATHER,
  CHANGE_TEMP,
  CHANGE_WIND,
  CHANGE_TITLE,
  GET_FAILED,
  LOAD_WEATHER,
  GEO_NOT_SUPPORTED
} from './actionTypes';
import axios from 'axios';
import { weatherEndPoint, weatherKey } from '../config/endPoints';

export const changeTitle = title => dispatch => {
  dispatch({ type: CHANGE_TITLE, payload: title });
};

export const changeTemp = tempType => dispatch => {
  dispatch({ type: CHANGE_TEMP, payload: tempType });
};

export const changeWind = windType => dispatch => {
  dispatch({ type: CHANGE_WIND, payload: windType });
};

export const loadWeather = weatherData => dispatch => {
  dispatch({ type: LOAD_WEATHER, payload: weatherData });
};

export const getWeather = () => async dispatch => {
  try {
    if (navigator.geolocation) {
      await navigator.geolocation.getCurrentPosition(position => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        axios
          .get(
            `${weatherEndPoint}lat=${lat}&lon=${lon}&units=metric&appid=${weatherKey}`
          )
          .then(res => {
            dispatch({ type: GET_WEATHER, payload: res.data });
          });
      });
    } else {
      dispatch({ type: GEO_NOT_SUPPORTED });
    }
  } catch {
    dispatch({ type: GET_FAILED });
  }
};
