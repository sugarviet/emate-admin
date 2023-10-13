// import axios from "axios";
import { API } from "./api_paths";
// import { request } from "../../utils/request";
import axios from "axios";

export const getAllRevenues = async (startDate, endDate) => {
  const res = await axios.get(API.GET_ALL_REVENUE, {
    params: {
      startDate: startDate,
      endDate: endDate
    }
  });

  return res.data;
};

export const postToGetRevenuesByDateRange = async (data) => {
  const res = await axios.post(API.GET_ALL_REVENUE, {
    startDay: data.startDay,
    endDay: data.endDay,
    user: "Admin",
    isEmate: true
  });

  return res.data.metaData;
};


// startDate: "2023-06-25",
// endDate: "2023-07-01"
