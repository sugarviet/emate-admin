import React from 'react'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;

const UserCourse = ({course}) => {
  return (
    <Card
    style={{
      width: 300,
    }}
    cover={
      <img
        width={250}
        height={200}
        alt="example"
        src={course.image}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
      title={<p style={{fontWeight: 'bold'}}>Name: {course.name}</p>}
      description={<p style={{fontWeight: 'bold'}}>Price: {course.price}</p>}
    />
  </Card>
  )
}

export default UserCourse
