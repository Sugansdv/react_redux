// src/redux/reducers/userReducer.js
const initialState = {
  users: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, { ...action.payload, id: Date.now() }]
      };
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload)
      };
    default:
      return state;
  }
};

export default userReducer;
