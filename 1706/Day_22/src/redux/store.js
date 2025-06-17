import { createStore, combineReducers } from 'redux';
import counterReducer from './reducers/counterReducer';
import userReducer from './reducers/userReducer';
import cartReducer from "./reducers/cartReducer";
import noteReducer from "./reducers/noteReducer";
import postReducer from './reducers/postReducer';


const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
    cart: cartReducer,
     notes: noteReducer,
       post: postReducer
});


// 🔹 Task 13: Enable Redux DevTools
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
