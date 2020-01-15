import foodReducer from './food/food.reducer.js';
import { combineReducers } from 'redux';



export const rootReducer = combineReducers({
  food: foodReducer
});
