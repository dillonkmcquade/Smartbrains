import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  user: {
    id: "",
    name: "",
    email: "",
    joined: ""
  },
  isLoading: false,
  errorMessage: undefined,
  isLoggedIn: false,
  isProfileOpen: false
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.FETCH_USER_START:
      return {
        ...state,
        isLoading: true
      };
    case UserActionTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: {
          id: action.payload.id,
          name: action.payload.name,
          email: action.payload.email,
          joined: action.payload.joined
        },
        isLoggedIn: true
      };
    case UserActionTypes.FETCH_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      };
    case UserActionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    case UserActionTypes.REGISTER_USER:
      return {
        ...state,
        user: {
          id: action.payload.id,
          name: action.payload.name,
          email: action.payload.email,
          joined: action.payload.joined
        },
        isLoggedIn: true
      };
    case UserActionTypes.USER_LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
        user: {
          id: "",
          name: "",
          email: "",
          joined: ""
        }
      };
    case UserActionTypes.TOGGLE_PROFILE_OPEN:
      return {
        ...state,
        isProfileOpen: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
