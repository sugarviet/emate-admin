import { API } from "./api_paths";
import axios from "axios";
import urlcat from "urlcat";

export const getRequestCoin = async () => {
    const res = await axios.get(API.API_GET_REQUEST_COIN);
  
    return res.data.metaData;
  };