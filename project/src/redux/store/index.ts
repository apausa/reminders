import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(initialState?: any) {
  const composedEnhancers = compose(applyMiddleware(thunkMiddleware));
  return createStore(rootReducer, initialState, composedEnhancers);
}
