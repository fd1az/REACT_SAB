import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

//Reducer
import { todoReducer } from './reducers/todoReducer';

const reducer = combineReducers({
  todosList: todoReducer,
});

const middleware = [];

export const store = createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);
