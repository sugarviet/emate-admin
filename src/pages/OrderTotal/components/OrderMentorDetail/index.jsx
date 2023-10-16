import React from 'react'
import { Divider, List, Card } from 'antd';

const OrderMentorDetail = ({data}) => {
console.log('OrderMentorDetail', data.checkout);

  return (
    <div >
      <h1>Detail</h1>
      <Divider />
      <List
        dataSource={data.checkout}
        renderItem={(item) => (
          <List.Item >
            <Card title={`Name: ${item.mentor.name}`} style={{width: '100%'}}>
              <p>Price: {item.price}</p>
            </Card>
          </List.Item>
        )}
      />
    </div>
  )
}

export default OrderMentorDetail
