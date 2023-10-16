import { API } from "./api_path";
import axios from "axios";

export const getListReports = async() => {
    const res = await axios.get(API.API_GET_REPORT_LIST);

    return res.data.metaData
}

export const postRevenueByDate = async(data) => {
    const res = await axios.post(API.API_POST_REPORT_LIST_BY_DATE, data);

    return res.data.metaData
}