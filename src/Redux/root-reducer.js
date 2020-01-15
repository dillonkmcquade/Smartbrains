import foodReducer from './food/food.reducer';
import { combineReducers } from 'redux';



export const rootReducer = combineReducers({
  food: foodReducer
});
