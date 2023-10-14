import { API } from "./api_paths";
import axios from "axios";
import urlcat from "urlcat";

export const getUsers = async () => {
  const res = await axios.get(API.API_GET_ALL_USERS);

  return res.data.metaData;
};

export const getUserDetail = async (userId) => {
  const res = await axios.get(urlcat(API.API_GET_USER_DETAIL, {userId: userId}));

  return res.data.metaData;
};

export const updateUserWallet = async (data) => {

  const res = await axios.put(urlcat(API.API_RECHARGE_WALLET, {userId: data._id}), {wallet: data.wallet});

  return res.data
}

// http://localhost:8080/course/tutor/650ffd11ecf7190320d57aa3

export const getCourseByUser = async (userId) => {

  const res = await axios.get(`${API.API_GET_COURSE_BY_USER}/${userId}`);

  return res.data.metaData
}