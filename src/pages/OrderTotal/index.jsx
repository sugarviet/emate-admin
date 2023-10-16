import React, { useState } from 'react';
import { Table, Tag, Button } from 'antd';
import { useGetAllOrders } from '../../services/OrderTotal/services';
import Loading from '../../components/Loading/Loading';
import MyModal from '../../components/MyModal';
import OrderDetail from './components/OrderDetail';
import { formatDate } from '../../hooks/formatDate';

const TYPE = {
  Course: {
    tagColor: 'blue'
  },
  HireMentor: {
    tagColor: 'green'
  },
  ToMentor: {
    tagColor: 'yellow'
  }
}

const OrderTotalPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderDetailId, setOrderDetailId] = useState("");
    const {data, isLoading} = useGetAllOrders();

    const handleOpenOrderDetailModal = (orderId) => {
      setIsModalOpen(true)
      setOrderDetailId(orderId)
    }

  console.log('data', data);

  const columns = [
    {
      title: 'Customer Name',
      key: 'customer.name',
      render: (text, record) => record.customer.name,
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: (text) => (
        <Tag color={TYPE[text].tagColor}>{text}</Tag>
      ),
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
    },
    {
      title: 'Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (text) => {
        
        return <p>{formatDate(text)}</p>
      }
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <Button type="primary" onClick={() => handleOpenOrderDetailModal(record._id)}>
          Open Detail
        </Button>
      ),
    },
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

      <MyModal open={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <OrderDetail orderId={orderDetailId} />
      </MyModal>

    </div>
  );
};

export default OrderTotalPage;
