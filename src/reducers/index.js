import { combineReducers } from 'redux';
import errorReducer from '../reducers/errorReducer';
import medicationReducer from '../reducers/medicationReducer';

export default combineReducers({
  errors: errorReducer,
  medications: medicationReducer
});
