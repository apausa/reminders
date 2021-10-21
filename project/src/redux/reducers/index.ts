import { combineReducers } from 'redux';
import taskReducer from './taskReducer';

// For scalability purposes.
export default combineReducers({
  taskReducer,
});
