import { useQuery } from "@tanstack/react-query";
import { getAllOrders, getOrderDetail } from "./callers";

const API_KEY = {
  GET_ALL_ORDERS: "orders",
  GET_ORDER: "order",
};

export const useGetAllOrders = () => {
  return useQuery({
    queryKey: [API_KEY.GET_ALL_ORDERS],
    queryFn: () => getAllOrders(),
  });
};

export const useGetOrderDetail = (orderId) => {
  return useQuery({
    queryKey: [API_KEY.GET_ORDER, orderId],
    queryFn: () => getOrderDetail(orderId),
  });
};

