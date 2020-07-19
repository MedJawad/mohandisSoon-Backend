import { moduleActions } from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  items: [],
};

export const modules = (state = initialState, action) => {
  switch (action.type) {
    case moduleActions.REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case moduleActions.SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        items: action.data,
      };
    case moduleActions.FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        items: [],
      };
    default:
      return state;
  }
};
