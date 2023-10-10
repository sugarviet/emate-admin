import { Col, Row, Card } from "antd";
import Revenue from "./components/Revenue";
import PieChart from "react-apexcharts";

const { Meta } = Card;

const Chart = () => {
  const series = [44, 55, 13, 43, 22];
  const options = {
    chart: {
      width: 380,
      type: "pie",
      toolbar: {
        show: false,
      },
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "14px",
      markers: {
        radius: 12,
        width: 12,
        height: 12,
        strokeWidth: 0,
        fillColors: undefined,
        strokeColor: "#fff",
        offsetX: 0,
        offsetY: 0,
      },
      itemMargin: {
        horizontal: 12,
        vertical: 8,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
            itemMargin: {
              horizontal: 8,
              vertical: 4,
            },
          },
        },
      },
    ],
    tooltip: {
      enabled: true,
      y: {
        formatter: function (value) {
          return value + "%";
        },
      },
    },
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <Row gutter={[16, 16]}>
        <Col span={18}>
          <Revenue />
        </Col>
        <Col span={6}>
          <Card style={{ height: "100%" }}>
            <Meta title="Pie chart" />
            <PieChart
              type="pie"
              series={series}
              options={options}
              height={350}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Chart;
