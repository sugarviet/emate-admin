import { Modal } from "antd";

const MyModal = ({ children, open=false, setIsModalOpen }) => {

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  return (
    <Modal open={open} onOk={handleOk} onCancel={handleCancel}>
      {children}
    </Modal>
  );
};

export default MyModal;
