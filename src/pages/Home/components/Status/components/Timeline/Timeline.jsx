import { Card, Divider, Steps } from "antd";

const { Meta } = Card;

const Timeline = () => {
  return (
    <div>
      <Card>
        <Meta title="Order Timeline" />
        <Divider />
        <Steps
          progressDot
          current={4}
          direction="vertical"
          items={[
            {
              title: "1983, orders, $4220",
              description: "13 Jul 2022 1:51 AM",
            },
            {
              title: "12 Invoices have been paid",
              description: "21 Nov 2022 12:55 PM",
            },
            {
              title: "Order #37745 from September",
              description: "06 Jan 2023 9:32 PM",
            },
            {
              title: "New order placed #XF-2356",
              description: "31 Mar 2023 7:06 PM",
            },
            {
              title: "New order placed #XF-2346",
              description: "22 Feb 2023 3:28 PM",
            },
          ]}
        />
      </Card>
    </div>
  );
};

export default Timeline;
