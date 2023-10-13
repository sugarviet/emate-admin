import Loading from '../../components/Loading/Loading';
import { useGetAllUsers, useRechargeWallet } from '../../services/User/services'
import styles from './User.module.css'
import { Table, Tag, Space, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { Highlighter } from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

const ROLE = {
  user: {
    color: 'green',
    name: "User"
  },
  mentor: {
    color: "blue",
    name: "Mentor"
  }
}

const User = () => {
  const {data, isLoading } = useGetAllUsers();
  const [walletValues, setWalletValues] = useState({});
  const {mutate: rechargeWallet} = useRechargeWallet();
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });



  const handleChangeWallet = (e, record) => {
    setWalletValues({
      ...walletValues,
      [record._id]: e.target.value,
    })
  }

  const handleOnBlurChange = (record) => {
    const newValue = parseInt(walletValues[record._id]);

    const data = {
      _id: record._id,
      wallet: newValue
    }

    rechargeWallet(data)

    setWalletValues({
      ...walletValues,
      [record._id]: '',
    });
  }


  if(isLoading){
    return <Loading />
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
      ...getColumnSearchProps('name'),
      
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: '30%',
      ...getColumnSearchProps('email'),
     
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      render: (roles) => (
        <>
    {roles.map((role) => (
      <Tag
        key={role._id}
        color={ROLE[role.name].color}
      >
        {ROLE[role.name].name}
      </Tag>
    ))}
  </>
      ),
    },
    {
      title: 'Current Wallet',
      dataIndex: 'wallet',
      key: 'wallet',
      // render: (wallet, record) => (
      //   <Input
      //     type='number'
      //     value={walletValues[record._id] || wallet}
      //     onChange={(e) =>
      //       handleChangeWallet(e, record)
      //     }
      //     onBlur={() => handleOnBlurChange(record)}
      //   />
      // )
    },
    {
      title: 'Update',
      key: 'update',
      render: (wallet, record) => (
        <Input
          type='number'
          value={walletValues[record._id] || wallet}
          onChange={(e) =>
            handleChangeWallet(e, record)
          }
          onBlur={() => handleOnBlurChange(record)}
        />
      )
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status ? 'green' : 'red'}>
          {status ? 'Active' : 'Inactive'}
        </Tag>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Link to={`/user/${record._id}`}>View Details</Link>
        </Space>
      ),
    },
  ];

  console.log('data', data);
  return (
    <main className={styles.container}>
        <Table dataSource={data} columns={columns} />
    </main>
  )
}

export default User
