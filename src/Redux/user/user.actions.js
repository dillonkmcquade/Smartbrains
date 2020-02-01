import { UserActionTypes } from "./user.types";


export const registerUser = user => ({
  type: UserActionTypes.REGISTER_USER,
  payload: user
});

export const userLogOut = () => ({
  type: UserActionTypes.USER_LOG_OUT
});

export const fetchUserStart = () => ({
  type: UserActionTypes.FETCH_USER_START
});

export const fetchUserSuccess = user => ({
  type: UserActionTypes.FETCH_USER_SUCCESS,
  payload: user
});

export const fetchUserFailure = error => ({
  type: UserActionTypes.FETCH_USER_FAILURE,
  payload: error
});

export const fetchUserStartAsync = credentials => {
  // used in sign-in component to communicate with server for authentication
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
