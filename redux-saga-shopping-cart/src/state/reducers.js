import { combineReducers } from 'redux';
import robotsReducer from './robots/reducer';
import cartReducer from './cart/reducer';

export default combineReducers({
  robots: robotsReducer,
  cart: cartReducer
});