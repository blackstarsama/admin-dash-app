import { CREATE_ITEM, DELETE_ITEM, UPDATE_ITEM } from "../types";

const initialState = {
  items: [],
};

const someReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    case UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, ...action.payload.data }
            : item
        ),
      };
    default:
      return state;
  }
};

export default someReducer;
