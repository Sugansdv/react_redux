const initialState = {
  items: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const exists = state.items.find(item => item.id === action.payload.id);
      if (exists) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }]
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };

    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };

    default:
      return state;
  }
};

export default cartReducer;
