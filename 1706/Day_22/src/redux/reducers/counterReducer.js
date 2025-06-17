// 🔹 Task 7 & 8: Initial State + Switch Statement
const initialState = {
  count: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT": // Task 8: switch handles this type
      return { ...state, count: state.count + 1 };

    case "DECREMENT":
      return { ...state, count: state.count - 1 };

    case "RESET":
      return { ...state, count: 0 };
 // Task 9: Return unchanged state for unknown action types
    default:
      return state;
  }
};

export default counterReducer;
