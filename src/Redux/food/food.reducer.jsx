import { foodActionTypes } from "./food.types";

const INITIAL_STATE = {
  ingredients: [],
  imgURL: "",
  loading: false
};

const foodReducer = (state = INITIAL_STATE, action, imageUrl) => {
  switch (action.type) {
    case foodActionTypes.FETCH_FOODDATA_START:
      return {
        ...state,
        loading: true
      };
    case foodActionTypes.FETCH_FOODDATA_SUCCESS:
      return {
        ...state,
        ingredients: action.payload.foodData,
        imgURL: action.payload.imageUrl,
        loading: false
      };
    case foodActionTypes.ON_ROUTE_CHANGE:
      return {
        ...state,
        route: action.payload
      };
    default:
      return state;
  }
};

export default foodReducer;
