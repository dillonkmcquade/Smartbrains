import { UserActionTypes } from "./user.types";

export const fetchUserStart = () => ({
  type: UserActionTypes.FETCH_USER_START
});

export const fetchUserSuccess = user => ({
  type: UserActionTypes.FETCH_FOODDATA_SUCCESS,
  payload: user
});

export const fetchUserFailure = error => ({
  type: UserActionTypes.FETCH_FOODDATA_SUCCESS,
  payload: error
});

export const fetchUserStartAsync = credentials => {
  return dispatch => {
    dispatch(fetchUserStart());
    return fetch("https://fierce-mountain-50317.herokuapp.com/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data.id) {
          dispatch(fetchUserSuccess(data));
        }
      })
      .catch(err => dispatch(fetchUserFailure(err.message)));
  };
};
