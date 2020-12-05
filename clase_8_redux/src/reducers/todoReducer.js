import {
  ADD_TODO,
  COMPLETE_TODO,
  CLEAR_COMPLETE,
  DELETE_TODO,
  EDIT_MODE,
  EDIT_TODO,
} from '../actions/actionTypes';
const initialState = [];

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case COMPLETE_TODO:
      state = state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        }
        return todo;
      });
      return state;
    case CLEAR_COMPLETE:
      state = state.filter((todo) => !todo.complete);
      return state;
    case DELETE_TODO:
      state = state.filter((todo) => todo.id !== action.id);
      return state;

    case EDIT_MODE:
      state = state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            editMode: !todo.editMode,
          };
        }
        return todo;
      });
      return state;

    case EDIT_TODO:
      state = state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            label: action.label,
          };
        }
        return todo;
      });
      return state;
    default:
      return state;
  }
};
