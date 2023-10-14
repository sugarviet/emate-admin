import React from 'react';
import { Table } from 'antd';
import { useGetAllOrders } from '../../services/OrderTotal/services';
import Loading from '../../components/Loading/Loading';

const OrderTotalPage = () => {

    const {data, isLoading} = useGetAllOrders();

  const columns = [
    {
      title: 'ID',
      dataIndex: '_id',
      key: '_id',
    },
    {
      title: 'Customer Name',
      key: 'customer.name',
      render: (text, record) => record.customer.name,
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Payment',
      dataIndex: 'payment',
      key: 'payment',
    },
    {
      title: 'Total Price',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
    }
  ];

  if(isLoading){
    return <Loading />
  }

  return (
    <div style={{ minHeight: '90vh' }}>
      <Table
        dataSource={data}
        columns={columns}
      />
    </div>
  );
};

export default OrderTotalPage;
