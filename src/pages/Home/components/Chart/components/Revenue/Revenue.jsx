import { Card, DatePicker, Divider } from "antd";
import { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import dayjs from "dayjs";
import { useGetListByDate } from "../../../../../../services/Home/services";

const { RangePicker } = DatePicker;
const { Meta } = Card;

const Revenue = () => {
  const [startDate, setStartDate] = useState(dayjs().startOf("week"));
  const [endDate, setEndDate] = useState(dayjs());

  const {data, mutate} = useGetListByDate()

  const profitArray = data?.listRevenue.map(revenue => revenue.profit);

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

  const handleDateChange = (dates) => {
    if (dates && dates.length === 2) {
      const [start, end] = dates;
      const newStartDate = dayjs(start);
      const newEndDate = dayjs(end);


      setStartDate(newStartDate);
      setEndDate(newEndDate);
    }
  };


  useEffect(() => {
    mutate({
      startDay: startDate.format(
        "DD-MM-YYYY"
      ),
    endDay: endDate.format(
      "DD-MM-YYYY"
    ),
    user: "Admin",
    isEmate: true
    })
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
      // data: formatDataForSeriesA(),
      // data:  [4230, 42730, 42730, 4730, 2730, 42730, 4273, 4230]
      data: profitArray
    },
  ];


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
