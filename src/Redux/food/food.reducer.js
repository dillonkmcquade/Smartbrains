import { FoodActionTypes } from "./food.types";

const INITIAL_STATE = {
  ingredients: [],
  imgURL: null,
  isLoading: false,
  errorMessage: undefined
};

const foodReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FoodActionTypes.FETCH_FOODDATA_START:
      return {
        ...state,
        isLoading: true
      };
    case FoodActionTypes.FETCH_FOODDATA_SUCCESS:
      return {
        ...state,
        ingredients: action.payload,
        isLoading: false
      };
    case FoodActionTypes.FETCH_FOODDATA_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false
      };
    case FoodActionTypes.UPDATE_IMAGE_URL:
      return {
        ...state,
        imgURL: action.payload
      };
    default:
      return state;
  }
};

export default foodReducer;
