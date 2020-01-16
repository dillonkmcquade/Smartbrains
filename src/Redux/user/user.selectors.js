import { createSelector } from "reselect";

const selectUser = state => state.user;

export const selectIsLoading = createSelector(
  [selectUser],
  user => user.isLoading
);

export const selectUserId = createSelector([selectUser], user => user.id);
