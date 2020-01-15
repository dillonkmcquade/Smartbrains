import { foodActionTypes } from "./food.types";

export const fetchFoodDataStart = () => ({
  type: foodActionTypes.FETCH_FOODDATA_START
});

export const fetchFoodDataSuccess = (foodData, imageUrl) => ({
  type: foodActionTypes.FETCH_FOODDATA_SUCCESS,
  payload: foodData,
  imageUrl
});

export const fetchFoodDataFailure = errorMessage => ({
  type: foodActionTypes.FETCH_FOODDATA_FAILURE,
  payload: errorMessage
});

export const fetchFoodDataStartAsync = input => {
  return dispatch => {
    dispatch(fetchFoodDataStart());
    fetch("http://localhost:3000/imagedata", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: input
      })
    })
      .then(response => response.json())
      .then(response => {
        const foodData = response.outputs[0].data.concepts;
        const imageUrl = response.outputs[0].input.data.image.url;
        dispatch(fetchFoodDataSuccess(foodData, imageUrl));
      })
      .catch(error => dispatch(fetchFoodDataFailure(error.message)));
  };
};
