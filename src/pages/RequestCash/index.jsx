import { Table } from "antd";
import React from "react";
import { useGetAllPendingRequest } from "../../services/RequestCoin/services";
import Loading from "../../components/Loading/Loading";

const RequestCastPage = () => {
  const {data, isLoading} = useGetAllPendingRequest();
  console.log(data);

  const columns = [
    {
      title: "Code",
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: "Type",
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: "Price",
      dataIndex: 'price',
      key: 'price',
    },
   
  ];

  if(isLoading){
    return <Loading />
  }

  return (
    <div style={{ minHeight: "90vh" }}>
      <Table dataSource={data} columns={columns} />
     
    </div>
  );
};

export default RequestCastPage;
