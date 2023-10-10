import { Card, DatePicker, Divider } from "antd";
import { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import dayjs from "dayjs";
// import { useGetAllRevenues } from "../../../../../../services/Revenue/services";

const { RangePicker } = DatePicker;
const { Meta } = Card;

const Revenue = () => {
  const [startDate, setStartDate] = useState(dayjs().startOf("week"));
  const [endDate, setEndDate] = useState(dayjs());

  // const { data: dataRevenues, isLoading } = useGetAllRevenues(startDate.format(
  //   "YYYY/MM/DD"
  // ), endDate.format(
  //   "YYYY/MM/DD"
  // ));
  // console.log('dataRevenues', dataRevenues);

  // console.log("startDate", startDate);
  // console.log("endDate", endDate);

  const handleChange = (dates) => {
    const [start, end] = dates;
    setStartDate(dayjs(start));
    setEndDate(dayjs(end));
  };

  const handleOpenChange = (status) => {
    if (status && startDate && endDate) {
      handleChange([startDate, endDate]);
    }
  };

  // const handleDateChange = (dates) => {
  //   if (dates && dates.length === 2) {
  //     const [start, end] = dates;
  //     setStartDate(dayjs(start));
  //     setEndDate(dayjs(end));
  //   } else {
  //     return;
  //   }
  // };

  const handleDateChange = (dates) => {
    if (dates && dates.length === 2) {
      const [start, end] = dates;
      const newStartDate = dayjs(start);
      const newEndDate = dayjs(end);

      // Check if the selected range is exactly 7 days
      if (newEndDate.diff(newStartDate, "day") !== 6) {
        return;
      }

      setStartDate(newStartDate);
      setEndDate(newEndDate);
    }
  };

  const formatDataForSeriesA = () => {
    const formattedData = Array(7).fill(0);

    // dataRevenues?.data.forEach((revenue) => {
    //   const dayOfWeek = dayjs(revenue.date).day();
    //   formattedData[dayOfWeek] += revenue.amount;
    // });

    return formattedData;
  };


  useEffect(() => {
    // console.log("Start Date:", startDate);
    // console.log("End Date:", endDate);
  }, [startDate, endDate]);

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
      categories: ["Mon", "Tue", "Wed", "Thu","Fri" ,"Sat", "Sun"],
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
      name: "Revenue",
      data: formatDataForSeriesA(),
    },
  ];

  // if(isLoading){
  //   return <div>Loading...</div>
  // }

  return (
    <div>
      <Card>
        <Meta title="Line Chart" />
        <Divider />
        <div>
          <RangePicker
            defaultValue={[startDate, endDate]}
            format={"YYYY/MM/DD"}
            onChange={handleDateChange}
            onOpenChange={handleOpenChange}
          />
        </div>
        <Chart
          type="line"
          series={series}
          options={options}
          height={350}
          width={900}
        />
      </Card>
    </div>
  );
};

export default Revenue;
