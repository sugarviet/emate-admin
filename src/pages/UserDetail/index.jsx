import { useParams } from "react-router-dom";
import { useGetUserDetail } from "../../services/User/services";
import Loading from "../../components/Loading/Loading";
import { Descriptions, Tag, Badge, Input, Divider, List } from 'antd';
import UserCourse from "../../components/UserCourse";

// {
//   "_id": "651a69cebaf2f58aa1cb63b5",
//   "email": "nguyen@gmail.com",
//   "password": "a2c6e0ae02a699092799553f6f014a19d4dfbd685ef4edf2c2aed55120fdedf9ede31412566461d45aad8031f2f4e1b57cd9c3514e3d7627e70e325376560cc1",
//   "name": "Nguyễn Trọng Công",
//   "avatar": "",
//   "male": 1,
//   "wallet": 2,
//   "rating": 0,
//   "about": "",
//   "coursePurchased": "",
//   "education": "University of Information Technology.",
//   "degree": "Master of Computer Science, Programmer, Software Developer, System Administrator.",
//   "price": 350,
//   "role": [
//       {
//           "name": "user",
//           "_id": "651a69cebaf2f58aa1cb63b6"
//       },
//       {
//           "name": "mentor",
//           "_id": "651a6a26baf2f58aa1cb63bb"
//       }
//   ],
//   "emailToken": "8fc2cd67dfa0a608b7d7d4e063237c3402bbee7d81a38947bff07fe7b8289811152eb80337eb8c3f8722f52ec64ef5c0e14351cff20b24dc6f373818c3075e64",
//   "isVerify": true,
//   "status": true,
//   "topReview": [],
//   "fieldsOfStudy": [
//       {
//           "name": "BackEnd Developer",
//           "level": 1,
//           "_id": "651a6a26baf2f58aa1cb63bc"
//       }
//   ],
//   "featuredImage": [],
//   "selectedCourse": [],
//   "__v": 0
// }


const UserDetail = () => {
  const { userId } = useParams();
  const {data:user, isLoading} = useGetUserDetail(userId);

  console.log('user', user);

  if(isLoading){
    return <>Loading...</>
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

  if(isLoading) {
    return <Loading />
  }


  return (
    <main style={{ minHeight: "90vh" }}>
      <Descriptions title="User Info" bordered items={items} />

      <Divider />
      <h1>Courses:</h1>
      <List dataSource={[1, 2, 3, 4]}  grid={{gutter: 16, column: 4}} renderItem={
        (item, index) => (
          <List.Item>
            <UserCourse />
          </List.Item>
        )
      }/>
    </main>
  );
};

export default UserDetail;
