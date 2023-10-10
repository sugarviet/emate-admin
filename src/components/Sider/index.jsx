import { Layout } from "antd";
import MenuSider from "./component/MenuSider";

const { Sider: AntdSider } = Layout;

const Sider = () => {
  return (
    <AntdSider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <MenuSider />
    </AntdSider>
  )
}

export default Sider
