import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getRequestCoin } from "./callers";
import { notification } from "antd";

const API_KEY = {
  GET_ALL_PENDING_REQUEST: "pending_request",
};

export const useGetAllPendingRequest = () => {
    return useQuery({
      queryKey: [API_KEY.GET_ALL_PENDING_REQUEST],
      queryFn: () => getRequestCoin(),
    });
  };
  