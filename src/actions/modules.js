import { moduleActions } from "./actionTypes";
import api from "../API/index";

const request = () => {
  return { type: moduleActions.REQUEST };
};
const success = (data) => {
  return { type: moduleActions.SUCCESS, data };
};
const failure = (error) => {
  return { type: moduleActions.FAILURE, error };
};

export const fetchAll = () => {
  const authOptions = {
    method: "get",
    url: `/modules`,
  };
  return (dispatch) => {
    dispatch(request());
    api(authOptions)
      .then((res) => (res.status === 200 ? res.data : null))
      .then((data) => {
        return dispatch(success(data));
      })
      .catch((error) => dispatch(failure(error)));
  };
};

export const updateItem = (item) => {
  const authOptions = {
    method: "put",
    url: `/modules/${item.id}`,
    data: item,
  };
  return (dispatch) => {
    return api(authOptions)
      .then((res) => (res.status === 200 ? res.data : null))
      .then(() => dispatch(fetchAll()))
      .catch((error) => dispatch(failure(error)));
  };
};
export const saveItem = (item) => {
  const authOptions = {
    method: "post",
    url: `/modules`,
    data: item,
  };
  return (dispatch) => {
    return api(authOptions)
      .then((res) => (res.status === 200 ? res.data : null))
      .then(() => dispatch(fetchAll()))
      .catch((error) => dispatch(failure(error)));
  };
};
