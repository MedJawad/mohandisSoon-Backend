import { combineReducers } from "redux";
import { auth } from "./authReducer";
import { articles } from "./articlesReducer";
import { filieres } from "./filieresReducer";
import { modules } from "./modulesReducer";
import { supports } from "./supportReducer";
import { userActions } from "../actions/actionTypes";

const appReducer = combineReducers({
  auth,
  articles,
  filieres,
  modules,
  supports,
});

const rootReducer = (state, action) => {
  if (action.type === userActions.LOGOUT) {
    state = undefined;
  }

  return appReducer(state, action);
};
export default rootReducer;
