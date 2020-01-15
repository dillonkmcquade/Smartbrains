import { foodActionTypes } from "./food.types";

const INITIAL_STATE = {
  ingredients: [],
  imgURL: null,
  isLoading: false,
  errorMessage: undefined
};

const foodReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case foodActionTypes.FETCH_FOODDATA_START:
      return {
        ...state,
        isLoading: true
      };
    case foodActionTypes.FETCH_FOODDATA_SUCCESS:
      return {
        ...state,
        ingredients: action.payload.foodData,
        imgURL: action.payload.imageUrl,
        isLoading: false
      };
    case foodActionTypes.FETCH_FOODDATA_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false
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
