function useReportList() {
  const REPORT_LIST = [
    {
      id: 1,
      icon: "AndroidOutlined",
      quantity: "714K",
      description: "Weekly Sales",
      classNameCard: "cardWeekySale",
      classNameContent: "contentWeeklySale",
    },
    {
      id: 2,
      icon: "AppleOutlined",
      quantity: "1.35m",
      description: "New Users",
      classNameCard: "cardNewUser",
      classNameContent: "contentNewUser",
    },
    {
      id: 3,
      icon: "WindowsOutlined",
      quantity: "1.72m",
      description: "Item Orders",
      classNameCard: "cardItemOrder",
      classNameContent: "itemOrderContent",
    },
    {
      id: 4,
      icon: "BugOutlined",
      quantity: "234",
      description: "Bug Reports",
      classNameCard: "cardBugReports",
      classNameContent: "bugContent",
    },
  ];

  return {
    REPORT_LIST,
  };
}

export default useReportList;
