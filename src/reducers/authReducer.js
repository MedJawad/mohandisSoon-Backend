import { userActions } from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  user: null,
  token: null,
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case userActions.REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case userActions.SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        user: action.user,
        token: action.token,
      };
    case userActions.FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        user: null,
        token: null,
      };
    case userActions.LOGOUT:
      return {
        isLoading: false,
        error: null,
        user: null,
        token: null,
      };
    default:
      return state;
  }
};
