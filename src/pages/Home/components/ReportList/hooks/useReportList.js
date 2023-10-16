function useReportList() {
  const REPORT_LIST = [
    {
      id: 1,
      icon: "UserOutlined",
      quantity: "714K",
      description: "Total Users",
      classNameCard: "cardWeekySale",
      classNameContent: "contentWeeklySale",
    },
    {
      id: 2,
      icon: "ShoppingCartOutlined",
      quantity: "1.35m",
      description: "New Orders",
      classNameCard: "cardNewUser",
      classNameContent: "contentNewUser",
    },
    {
      id: 3,
      icon: "ReadOutlined",
      quantity: "1.72m",
      description: "New Courses",
      classNameCard: "cardItemOrder",
      classNameContent: "itemOrderContent",
    },
    {
      id: 4,
      icon: "DollarOutlined",
      quantity: "234",
      description: "Todays's revenue",
      classNameCard: "cardBugReports",
      classNameContent: "bugContent",
    },
  ];

  return {
    REPORT_LIST,
  };
}

export default useReportList;
