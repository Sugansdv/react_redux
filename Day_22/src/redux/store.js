import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userReducer';
import errorReducer from './features/errorSlice'; 
import githubReducer from './features/github/githubReducer';
import weatherReducer from './features/weather/weatherReducer';
import loggerMiddleware from './features/loggerMiddleware';
import postReducer from './features/post/postReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    error: errorReducer,
    github: githubReducer,
     weather: weatherReducer,
      post: postReducer
   },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware) //  middleware
});

export default store;
