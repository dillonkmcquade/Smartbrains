import { combineReducers } from "redux";
import foodReducer from './food/food.reducer';



export const rootReducer = combineReducers({
  food: foodReducer
});
