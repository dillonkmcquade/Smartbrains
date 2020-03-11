import { UserActionTypes } from "./user.types";

export const setLoading = action => ({
  type: UserActionTypes.SET_LOADING,
  payload: action
});

export const toggleProfileOpen = action => ({
  type: UserActionTypes.TOGGLE_PROFILE_OPEN,
  payload: action
});

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
  const saveAuthTokenInSession = token => {
    window.sessionStorage.setItem("token", token);
  };
  return dispatch => {
    dispatch(fetchUserStart());

    return fetch("https://fierce-mountain-50317/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data.userId && data.success === "true") {
          saveAuthTokenInSession(data.token);
          return fetch(`https://fierce-mountain-50317/profile/${data.userId}`, {
            method: "get",
            headers: {
              "Content-Type": "application/json",
              Authorization: data.token
            }
          })
            .then(response => response.json())
            .then(user => {
              if (user && user.email) {
                return dispatch(fetchUserSuccess(user));
              }
            })
            .catch(console.log);
        }
      })
      .catch(err => {
        dispatch(fetchUserFailure(err.message));
      });
  };
};
