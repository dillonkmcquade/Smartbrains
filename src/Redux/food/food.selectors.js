import { createSelector } from "reselect";

const selectFood = state => state.food;

export const selectIngredients = createSelector(
  [selectFood],
  food => food.ingredients
);

export const selectIsLoading = createSelector(
  [selectFood],
  food => food.isLoading
);

export const selectImageUrl = createSelector([selectFood], food => food.imgURL);


