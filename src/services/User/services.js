import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getUserDetail, getUsers, updateUserWallet, getCourseByUser, withDrawUserWallet } from "./callers";
import { notification } from "antd";

const API_KEY = {
  GET_ALL_USERS: "users",
  GET_USER_DETAIL: "user",
  GET_COURSE_BY_USER: "course-user"
};

export const useGetAllUsers = () => {
  return useQuery({
    queryKey: [API_KEY.GET_ALL_USERS],
    queryFn: () => getUsers(),
  });
};

export const useGetCourseUsers = (userId) => {
  return useQuery({
    queryKey: [API_KEY.GET_COURSE_BY_USER],
    queryFn: () => getCourseByUser(userId),
  });
};

export const useGetUserDetail = (userId) => {
  return useQuery({
    queryKey: [API_KEY.GET_USER_DETAIL, userId],
    queryFn: () => getUserDetail(userId),
  });
};

export const useRechargeWallet = () => {
  const queryClient = useQueryClient();

  return useMutation(updateUserWallet, {
    onSuccess: () => {
      notification.success({
        message: "Updated user wallet successfully"
      })
      queryClient.invalidateQueries(API_KEY.GET_ALL_USERS);
    },
    onError: () => {
      notification.error({
        message: "Updated user wallet unsuccessfully"
      })
    },
  });
}

export const useWithDrawWallet = () => {
  const queryClient = useQueryClient();

  return useMutation(withDrawUserWallet, {
    onSuccess: () => {
      notification.success({
        message: "Updated user wallet successfully"
      })
      queryClient.invalidateQueries(API_KEY.GET_ALL_USERS);
    },
    onError: () => {
      notification.error({
        message: "Updated user wallet unsuccessfully"
      })
    },
  });
}
