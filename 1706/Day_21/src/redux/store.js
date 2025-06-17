// Task 3: Create Redux Store
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import authReducer from './authSlice';
import messageReducer from './messageSlice';
import logger from './loggerMiddleware'; 
import todoReducer from './todoSlice';
import themeReducer from './themeSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
      message: messageReducer,
      todos: todoReducer,
         theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  // Redux DevTools are still enabled
});

export default store;

