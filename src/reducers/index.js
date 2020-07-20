import { combineReducers } from "redux";
import { auth } from "./authReducer";
import { filieres } from "./filieresReducer";
import { programmes } from "./programmesReducer";
import { modules } from "./modulesReducer";
import { supports } from "./supportReducer";
import { userActions } from "../actions/actionTypes";

const appReducer = combineReducers({
  auth,
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
