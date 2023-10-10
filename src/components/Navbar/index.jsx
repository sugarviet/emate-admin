
import { Layout, Avatar, Dropdown, Badge, Button, Menu } from "antd";
import { BellOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import styles from "./Navbar.module.css";
import useNavbar from "./hooks/useNavbar";
const { Header } = Layout;

const Navbar = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const { handleLogout } = useNavbar();
  const [count] = useState(0);
  const [orders] = useState([]);

  const items= [
    {
      label: (
        <div>
          <h4>Admin</h4>
        </div>
      ),
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: <a href="#">Home</a>,
      key: "1",
    },
    {
      label: <a href="#">Profile</a>,
      key: "2",
    },
    {
      label: <a href="#">Settings</a>,
      key: "3",
    },
    {
      type: "divider",
    },
    {
      label: <p onClick={handleLogout}>Logout</p>,
      key: "4",
    },
  ];

  return (
    <Header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img
            src="https://seeklogo.com/images/A/ant-design-logo-EAB6B3D5D9-seeklogo.com.png"
            alt="logo"
          />
        </div>
        <div className={styles.actions}>
          <ul className={styles.actionsList}>
            <li>
              <Dropdown
                overlay={
                  <Menu>
                    {orders.map(() => (
                      <Menu.Item style={{margin: '10px 0'}}>
                        <Avatar
                          icon={<UserOutlined />}
                          style={{ cursor: "pointer", margin: '0 10px 0 0' }}
                        />
                        Admin has created a order
                      </Menu.Item>
                    ))}
                  </Menu>
                }
                trigger={["click"]}
                visible={showNotifications}
                onVisibleChange={(visible) => {
                  setShowNotifications(visible);
                  
                }}
                placement="topRight"
              >
                <Badge count={count}>
                  <Button icon={<BellOutlined />} shape="circle" />
                </Badge>
              </Dropdown>
            </li>
            <li>
              <Dropdown
                menu={{
                  items
                }}
                trigger={["hover"]}
              >
                <Avatar
                  src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
                  style={{ cursor: "pointer" }}
                />
              </Dropdown>
            </li>
          </ul>
        </div>
      </nav>
    </Header>
  );
}

export default Navbar
