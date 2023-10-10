import { Col, Row, Card } from "antd";
import styles from "./ReportList.module.css";

import {
  AndroidOutlined,
  AppleOutlined,
  WindowsOutlined,
  BugOutlined,
} from "@ant-design/icons";
import useReportList from "./hooks/useReportList";

const iconMapping = {
  AndroidOutlined,
  AppleOutlined,
  WindowsOutlined,
  BugOutlined,
};

const ReportList = () => {
  const { REPORT_LIST } = useReportList();
  return (
    <Row gutter={[16, 16]}>
      {REPORT_LIST.map((item) => {
        const IconComponent = iconMapping[item.icon];
        return (
          <Col span={6} key={item.id}>
            <Card
              className={`${styles.cardItem} ${styles[item.classNameCard]}`}
            >
              <div>
                <div
                  className={`${styles.weeklySales} ${
                    styles[item.classNameContent]
                  }`}
                >
                  <IconComponent className={styles["icon"]} />
                </div>
                <div>
                  <h3 className={styles.quantityReport}>{item.quantity}</h3>
                  <h6 className={styles.titleReport}>{item.description}</h6>
                </div>
              </div>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default ReportList;
