import {
    LineChartOutlined,
    UserOutlined,
    DollarCircleOutlined
  } from "@ant-design/icons";
  import { Menu } from "antd";
import React from "react";
  import { Link } from "react-router-dom";
  
  const MenuSider = () => {
    function getItem(label, key, icon, path, children, type) {
      return {
        key,
        icon,
        children,
        label,
        type,
        path,
      };
    }
  
    const items = [
      getItem("Dashboard", "1", <LineChartOutlined />, "/", null, ""),
      getItem("Users", "2", <UserOutlined />, "/user", null, ""),
      getItem("Request Cash", "3", <DollarCircleOutlined />, "/request-cash", null, ""),
      getItem("Orders", "4", <DollarCircleOutlined />, "/order", null, ""),


    ];
    return (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        {items.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.path}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    );
  };
  
  export default MenuSider;