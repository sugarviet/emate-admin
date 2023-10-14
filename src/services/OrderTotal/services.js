import { useQuery } from "@tanstack/react-query";
import { getAllOrders } from "./callers";

const API_KEY = {
  GET_ALL_ORDERS: "orders",
};

export const useGetAllOrders = () => {
  return useQuery({
    queryKey: [API_KEY.GET_ALL_ORDERS],
    queryFn: () => getAllOrders(),
  });
};

