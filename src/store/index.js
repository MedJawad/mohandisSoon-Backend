import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
import RootReducer from "../reducers/index";
// const store = createStore(
//   RootReducer,
//   applyMiddleware(thunk) //composeWithDevTools()
// );
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
