const initialState = {
  notes: []
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return {
        ...state,
        notes: [...state.notes, { ...action.payload, id: Date.now() }]
      };
    case "DELETE_NOTE":
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload)
      };
    default:
      return state;
  }
};

export default noteReducer;
