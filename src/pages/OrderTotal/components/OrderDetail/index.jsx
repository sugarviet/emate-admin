import React from 'react'
import { useGetOrderDetail } from '../../../../services/OrderTotal/services'
import CourseDetail from '../CourseDetail';
import OrderMentorDetail from '../OrderMentorDetail';
import Loading from '../../../../components/Loading/Loading';

const componentMap = {
  Course: CourseDetail,
  HireMentor: OrderMentorDetail,
  ToMentor: OrderMentorDetail,

};

const OrderDetail = ({orderId=""}) => {
  const {data, isLoading} = useGetOrderDetail(orderId);

  if(isLoading){
    return <Loading />
  }

  const DynamicComponent = componentMap[data.type];

  return (
    <div>
      <DynamicComponent data={data}/>
    </div>
  )
}

export default OrderDetail
