import { articleActions } from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  items: [],
};

export const articles = (state = initialState, action) => {
  switch (action.type) {
    case articleActions.REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case articleActions.SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        items: action.data,
      };
    case articleActions.FAILURE:
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
