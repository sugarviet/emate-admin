import { useQuery, useMutation } from "@tanstack/react-query";
import {
 getAllRevenues,
 postToGetRevenuesByDateRange
} from "./callers";
import { notification } from "antd";

const API_KEY = {
  GET_ALL_REVENUES: "revenues",
};

export const useGetAllRevenues = (startDate, endDate) => {
  return useQuery(
    {
      queryKey: [API_KEY.GET_ALL_REVENUES, startDate, endDate],
      queryFn: () => getAllRevenues(startDate, endDate),
    },
    {
      staleTime: "100000",
    }
  );
};

export const useGetRevenuesByDate = () => {

  return useMutation(postToGetRevenuesByDateRange, {
    onSuccess: () => {
      notification.success({
        message: "Updated user wallet successfully"
      })
    },
    onError: () => {
      notification.error({
        message: "Updated user wallet unsuccessfully"
      })
    },
  });
}

