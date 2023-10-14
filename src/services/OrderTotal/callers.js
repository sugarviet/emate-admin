import { API } from "./api_paths";
import axios from "axios";

export const getAllOrders = async () => {
    const res = await axios.get(API.API_GET_ALL_ORDERS);
  
    return res.data.metaData;
  };