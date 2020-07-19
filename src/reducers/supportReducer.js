import { supportActions } from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  items: [],
};

export const supports = (state = initialState, action) => {
  switch (action.type) {
    case supportActions.REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case supportActions.SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        items: action.data,
      };
    case supportActions.FAILURE:
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
