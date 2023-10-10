import { Card, Divider, List, Button } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import useNewsUpdate from "./hooks/useNewsUpdate";
const { Meta } = Card;

const NewsUpdate = () => {
  const { handleSeeMore, showSeeMore, visibleNewsData } = useNewsUpdate();

  return (
    <div>
      <Card>
        <Meta title="News Update" />
        <Divider />
        <List
          dataSource={visibleNewsData}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={item.title}
                description={item.description}
              />
              <div>
                <ClockCircleOutlined /> {item.timestamp}
              </div>
            </List.Item>
          )}
        />
        {showSeeMore && (
          <Button type="link" onClick={handleSeeMore}>
            See More
          </Button>
        )}
      </Card>
    </div>
  );
};

export default NewsUpdate;
