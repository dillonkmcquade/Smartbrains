import foodReducer from "./food/food.reducer.js";
import userReducer from "./user/user.reducer";
import { combineReducers } from "redux";



export const rootReducer = combineReducers({
	food: foodReducer,
	user: userReducer
});

export default rootReducer;


