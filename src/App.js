import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Filiere from "./pages/Filiere";
import Module from "./pages/Module";
import Support from "./pages/Support";
import Login from "./pages/Login";
import Header from "./components/Header";
import { Provider, useSelector, useDispatch } from "react-redux";
import store from "./store";
import authActions from "./actions/auth";
import Article from "./pages/Article";

function App() {
  const isAuthentified = useSelector((state) => state.auth.token != null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authActions.loginWithCookie());
  }, []);

  // let authRedirect = null;
  // if (!isAuthentified) {
  //   authRedirect = <Redirect to="/login" />;
  // }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {isAuthentified ? (
            <React.Fragment>
              <Header />
              <Route exact path="/articles" component={Article} />
              <Route exact path="/filieres" component={Filiere} />
              <Route
                exact
                path="/modules/filiere/:filiere_id"
                component={Module}
              />
              <Route exact path="/modules" component={Module} />
              <Route
                exact
                path="/supports/module/:module_id"
                component={Support}
              />
              <Route exact path="/supports" component={Support} />
              {/* <Redirect exact from="/" to="/filieres" component={Filiere} /> */}
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Route component={Login} />
            </React.Fragment>
          )}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
