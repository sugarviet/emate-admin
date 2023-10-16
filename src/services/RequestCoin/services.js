import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getRequestCoin, approveRequest } from "./callers";
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

  export const useApproveRequest = () => {
    const queryClient = useQueryClient();
  
    return useMutation(approveRequest, {
      onSuccess: () => {
        notification.success({
          message: "Request submit successfully"
        })
        queryClient.invalidateQueries(API_KEY.GET_ALL_PENDING_REQUEST);
      },
      onError: () => {
        notification.error({
          message: "Request submit failed"
        })
      },
    });
  }
  