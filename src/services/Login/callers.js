import { API } from "./api_paths";
import { request } from "../../utils/request";

export const login = async (data) => {
  const res = await request.post(API.API_LOGIN, data);

  return res.data.token;
};
