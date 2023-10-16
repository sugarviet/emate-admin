import { Table, Button } from "antd";
import React from "react";
import { useGetAllPendingRequest, useApproveRequest } from "../../services/RequestCoin/services";
import Loading from "../../components/Loading/Loading";

const button = {
  checked: {

  }
}

const RequestCastPage = () => {
  const {mutate: approveRequest} = useApproveRequest();
  const {data, isLoading} = useGetAllPendingRequest();

  const handleApproveRequest = (record) => {
    approveRequest({
      requestID: record._id,
      user: record.user
    })

  }

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
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => {
        console.log('check', record.checked);
        return (
          !record.checked ? (
            <Button type="primary" onClick={() => handleApproveRequest(record)}>
              Approve
            </Button>
          ) : (
            <Button disabled={true}>
              Approved
            </Button>
          )
        )
      },
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
