function useRevenue() {
  const options = {
    chart: {
      height: 450,
      type: "line",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    markers: {
      size: 4,
      colors: ["#fff"],
      strokeColors: "#00bcd4",
      strokeWidth: 2,
      hover: {
        size: 7,
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      labels: {
        style: {
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "12px",
        },
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      offsetY: 2,
      offsetX: 0,
      fontSize: "12px",
    },
    tooltip: {
      enabled: true,
    },
  };

  const series = [
    {
      name: "Series A",
      data: [30, 40, 25, 50, 49, 21, 70, 51],
    },
    {
      name: "Series B",
      data: [23, 12, 54, 61, 32, 56, 81, 19],
    },
  ];

  return {
    options,
    series,
  };
}

export default useRevenue;
