import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk'; 
import { composeWithDevTools } from '@redux-devtools/extension';
import logger from '../middleware/logger';
import promiseMiddleware from '../middleware/promise';
import quoteReducer from './reducers/quoteReducer';
import userReducer from './reducers/userReducer';
import weatherReducer from './reducers/weatherReducer';
import jokeReducer from './reducers/jokeReducer';

const rootReducer = combineReducers({
  quote: quoteReducer,
  users: userReducer,
  weather: weatherReducer,
  joke: jokeReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger, promiseMiddleware))
);

export default store;
