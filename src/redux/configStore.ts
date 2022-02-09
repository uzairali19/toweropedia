import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import clientsReducer from './reducers/clients';

const reducer = combineReducers({
  clientsReducer,
});

const store = createStore(
  reducer,
  compose(applyMiddleware(thunkMiddleware, logger))
);

export default store;
