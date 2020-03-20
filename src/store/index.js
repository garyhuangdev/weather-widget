import weatherReducer from '../reducers/weather';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';

import { createStore, applyMiddleware, compose } from 'redux';

const rootReducer = combineReducers({
  weather: weatherReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
