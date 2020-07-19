import { supportActions } from "./actionTypes";
import api from "../API/index";

const request = () => {
  return { type: supportActions.REQUEST };
};
const success = (data) => {
  return { type: supportActions.SUCCESS, data };
};
const failure = (error) => {
  return { type: supportActions.FAILURE, error };
};

export const fetchAll = () => {
  const authOptions = {
    method: "get",
    url: `/supports`,
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
    url: `/supports/${item.id}`,
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
    url: `/supports`,
    data: item,
  };
  return (dispatch) => {
    return api(authOptions)
      .then((res) => (res.status === 200 ? res.data : null))
      .then(() => dispatch(fetchAll()))
      .catch((error) => dispatch(failure(error)));
  };
};
