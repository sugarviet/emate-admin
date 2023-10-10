import { Divider, Table } from "antd";
import React, { useState } from "react";
import { Line } from "@ant-design/plots";
import { CHART_DATA } from "../../data/chartData";
import { Card, Statistic } from "antd";
import CountUp from 'react-countup';

const formatter = (value) => <CountUp end={value} separator="," />;
const RequestCastPage = () => {
  const [data] = useState(CHART_DATA);
  const dataSource = [
    {
      key: "1",
      name: "John Doe",
      email: "john@example.com",
      money: 1000,
      phone: "0905124585",
      date: "2023-10-07",
    },
    {
      key: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "0905124575",
      money: 1500,
      date: "2023-10-08",
    },
    // Add more data as needed
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "email",
    },
    {
      title: "Money Requested",
      dataIndex: "money",
      key: "money",
    },
    {
      title: "Date Requested",
      dataIndex: "date",
      key: "date",
    },
  ];

  const config = {
    data,
    padding: "auto",
    xField: "Date",
    yField: "scales",
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
    },
  };
  return (
    <div style={{ minHeight: "90vh" }}>
      <Table dataSource={dataSource} columns={columns} />
      <Divider />
      <div style={{margin: '10px'}}>
        <Card
          title="Wallet"
          bordered={false}
          style={{
            width: 300,
          }}
        >
          <Statistic title="Active outcome" value={200} formatter={formatter} />
        </Card>
      </div>
      <Line {...config} />
    </div>
  );
};

export default RequestCastPage;
