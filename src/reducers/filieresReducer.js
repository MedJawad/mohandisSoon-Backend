import { filiereActions } from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  items: [],
};

export const filieres = (state = initialState, action) => {
  switch (action.type) {
    case filiereActions.REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case filiereActions.SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        items: action.data,
      };
    case filiereActions.FAILURE:
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
