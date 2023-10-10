import { Col, Row } from "antd";
import NewsUpdate from "./components/NewsUpdate";
import Timeline from "./components/Timeline";

const Status = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <Row gutter={[16, 16]}>
        <Col span={18}>
          <NewsUpdate />
        </Col>
        <Col span={6}>
          <Timeline />
        </Col>
      </Row>
    </div>
  );
};

export default Status;
