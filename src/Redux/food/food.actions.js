import { FoodActionTypes } from "./food.types";
import {
  convertObjectToIngredientsList,
  convertObjectToImageUrl
} from "../redux.utils";

export const fetchFoodDataStart = () => ({
  type: FoodActionTypes.FETCH_FOODDATA_START
});

export const fetchFoodDataSuccess = ingredients => ({
  type: FoodActionTypes.FETCH_FOODDATA_SUCCESS,
  payload: ingredients
});

export const updateImageUrl = imageUrl => ({
  type: FoodActionTypes.UPDATE_IMAGE_URL,
  payload: imageUrl
});

export const fetchFoodDataFailure = errorMessage => ({
  type: FoodActionTypes.FETCH_FOODDATA_FAILURE,
  payload: errorMessage
});

export const fetchFoodDataStartAsync = input => {
  return dispatch => {
    dispatch(fetchFoodDataStart());
    return fetch("https://fierce-mountain-50317.herokuapp.com/imagedata", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: input
      })
    })
      .then(response => response.json())
      .then(foodData => {
        const ingredients = convertObjectToIngredientsList(foodData);
        const imageUrl = convertObjectToImageUrl(foodData);
        dispatch(fetchFoodDataSuccess(ingredients));
        dispatch(updateImageUrl(imageUrl));
      })
      .catch(error => dispatch(fetchFoodDataFailure(error.message)));
  };
};
