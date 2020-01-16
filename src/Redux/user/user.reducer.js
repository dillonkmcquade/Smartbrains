import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  user: {
    id: "",
    name: "",
    email: "",
    entries: "",
    joined: ""
  },
  isLoading: false,
  errorMessage: undefined
};

const foodReducer = (state = INITIAL_STATE, action) => {
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
        }
      };
    case UserActionTypes.FETCH_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default foodReducer;
