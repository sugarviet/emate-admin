import { useQuery, useMutation } from "@tanstack/react-query";
import { getListReports, postRevenueByDate } from "./callers";

const API_KEY = {
    GET_ALL_REPORT_LIST: "report-list",
  };

  export const useGetAllReportList = () => {
    return useQuery({
      queryKey: [API_KEY.GET_ALL_REPORT_LIST],
      queryFn: () => getListReports(),
    });
  };

  export const useGetListByDate = () => {
  
    return useMutation(postRevenueByDate, {
      onSuccess: () => {
        
    
      },
      onError: () => {
        
      },
    });
  }