import { Spin } from "antd";

const Loading = () => {
  return (
    <main style={{minHeight: '90vh'}}>
      <Spin
        size="large"
        style={{ position: "absolute", left: "60%", top: "50%", zIndex: 100 }}
      />
    </main>
  );
};

export default Loading;
