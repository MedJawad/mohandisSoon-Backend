import { userActions } from "./actionTypes";
import api from "../API/index";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const queryString = require("querystring");

const request = () => {
  return { type: userActions.REQUEST };
};
const success = (data) => {
  return { type: userActions.SUCCESS, token: data.token, user: data.user };
};
const failure = (error) => {
  return { type: userActions.FAILURE, error };
};

const loginWithCookie = () => {
  const token = cookies.get("token");
  const user = cookies.get("user");
  // console.log(user, token);
  if (token)
    return {
      type: userActions.SUCCESS,
      token: token,
      user,
    };
  return { type: "COOKIE_NOT_FOUND" };
};

const login = (userCredentials) => {
  const authOptions = {
    method: "POST",
    url: `/auth/login`,
    data: queryString.stringify(userCredentials),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    json: true,
  };
  return (dispatch) => {
    dispatch(request());
    api(authOptions)
      .then((res) => (res.status === 200 ? res.data : null))
      .then((data) => {
        cookies.set("token", data.token, {
          maxAge: 24 * 60 * 60,
        });
        cookies.set("user", data.user, {
          maxAge: 24 * 60 * 60,
        });
        console.log(data);

        return dispatch(success(data));
      })
      .catch((error) => dispatch(failure(error)));
  };
};

const logout = () => {
  cookies.remove("token");
  cookies.remove("user");

  return { type: userActions.LOGOUT };
};
export default { login, loginWithCookie, logout };
