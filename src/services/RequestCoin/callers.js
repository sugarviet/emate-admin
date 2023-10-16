import { API } from "./api_paths";
import axios from "axios";

export const getRequestCoin = async () => {
    const res = await axios.get(API.API_GET_REQUEST_COIN);
  
    return res.data.metaData;
  };

  export const approveRequest = async (data) => {
    const res = await axios.put(API.API_APPROVE_REQUEST, data);
  
    return res.data;
  };