import { createSelector } from "reselect";

const selectUser = state => state.user;

export const selectIsLoading = createSelector(
  [selectUser],
  user => user.isLoading
);

export const selectUser2 = createSelector([selectUser], user => user.user);

export const selectUserId = createSelector(
  [selectUser2],
  user2 => user2.id
)

export const selectIsLoggedIn = createSelector(
  [selectUser],
  user => user.isLoggedIn
)

export const selectIsProfileOpen = createSelector(
  [selectUser],
  user => user.isProfileOpen
)
