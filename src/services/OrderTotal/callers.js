import urlcat from "urlcat";
import { API } from "./api_paths";
import axios from "axios";

export const getAllOrders = async () => {
    const res = await axios.get(API.API_GET_ALL_ORDERS);
  
    return res.data.metaData;
  };

export const getOrderDetail = async (orderId) => {
    const res = await axios.get(urlcat(API.API_GET_ORDER_DETAIL, {orderId: orderId}));
  
    return res.data.metaData;
  };