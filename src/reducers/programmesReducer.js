import { programmeActions } from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  items: [],
};

export const programmes = (state = initialState, action) => {
  switch (action.type) {
    case programmeActions.REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case programmeActions.SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        items: action.data,
      };
    case programmeActions.FAILURE:
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
