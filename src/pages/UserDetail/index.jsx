import { useParams } from "react-router-dom";
import { useGetCourseUsers, useGetUserDetail } from "../../services/User/services";
import Loading from "../../components/Loading/Loading";
import { Descriptions, Tag, Badge, Input, Divider, List } from 'antd';
import UserCourse from "../../components/UserCourse";


const UserDetail = () => {
  const { userId } = useParams();
  const {data:user, isLoading:userLoading} = useGetUserDetail(userId);
  const {data:userCourse, isLoading:userCourseLoading} = useGetCourseUsers(userId)

  if(userCourseLoading){
    return <Loading />
  }

  if(userLoading){
    return <Loading />
  }

  const items = [
    {
      key: '1',
      label: 'Email',
      children: user.email,
    },
    {
      key: '2',
      label: 'Rating',
      children: user.rating ? user.rating : 'Not yet',
    },
    {
      key: '3',
      label: 'Education',
      children: user.education ? user.education : 'Not yet',
    },
    {
      key: '4',
      label: 'Education',
      children: user.education ? user.education : 'Not yet',
      span: 2
    },
    {
      key: '5',
      label: 'Role',
      children: `${user.role[0].name} ${user.role[1]?.name ? user.role[1].name : ""}`,
      span: 2,
    },
    {
      key: '6',
      label: 'Degree',
      children: "Master of Computer Science, Programmer, Software Developer, System Administrator",
      span: 3,
    },
    {
      key: '7',
      label: 'Wallet',
      children: <Input placeholder="" value={user.wallet}/>
    }
  ];


  return (
    <main style={{ minHeight: "90vh" }}>
      <Descriptions title="User Info" bordered items={items} />

    {user.role.length === 1 ? null :
      (
        <div>
          <Divider />
          <h1>Courses:</h1>
          <List dataSource={userCourse}  grid={{gutter: 16, column: 4}} renderItem={
            (item, index) => (
              <List.Item key={index}>
                <UserCourse course={item}/>
              </List.Item>
            )
          }/>
        </div>
      )
    }
    </main>
  );
};

export default UserDetail;
