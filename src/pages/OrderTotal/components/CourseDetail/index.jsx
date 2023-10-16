import React from 'react'
import { Divider, List, Card } from 'antd';

const CourseDetail = ({data}) => {
console.log('courseDetail', data);
  return (
    <div >
      <h1>Detail</h1>
      <Divider />
      <List
        dataSource={data.checkout}
        renderItem={(item) => (
          <List.Item >
            <Card title={`Name: ${item.course.name}`} style={{width: '100%'}}>
              <h2>Owner: {item.course.owner.name}</h2>
              <p>Price: {item.course.price}</p>
            </Card>
          </List.Item>
        )}
      />
    </div>
  )
}

export default CourseDetail
