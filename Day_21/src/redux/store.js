import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import themeReducer from './theme/themeSlice';
import usernameReducer from './username/usernameSlice';
import counter1Reducer from './counter/counterSlice1';
import counter2Reducer from './counter/counterSlice2';
import todoReducer from './todos/todoSlice';
import loginReducer from './login/loginSlice';

//Task 12
const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
  username: usernameReducer,
  counter1: counter1Reducer,
  counter2: counter2Reducer,
  todo: todoReducer,
  login: loginReducer,
});

// Create store with rootReducer
const store = configureStore({
  reducer: rootReducer,
  devTools: true, // Task 7
});

export default store;
