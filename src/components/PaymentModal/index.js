import { Modal, Input, Row, Col, Button } from "antd";

const PaymentModal = (props) => {
  return (
    <>
      <Modal
        centered
        footer={null}
        visible={props.showModal}
        onCancel={() => {
          props.setShowModal(false);
          props.setSelectedCourse({});
        }}
      >
        <div style={{ textAlign: "center", marginTop: "15px" }}>
          <h1>{props.selectedCourse.title}</h1>
        </div>

        <p>
          <span style={{ color: "gray" }}>Payment of</span> ₹{" "}
          {props.selectedCourse.price} /-
        </p>
        <p>Please enter your card details</p>

        <Input
          style={{ marginBottom: "10px" }}
          placeholder="Card Number"
          type="number"
        />
        <Input
          style={{ marginBottom: "10px" }}
          placeholder="Name on Card"
          type="text"
        />
        <Row justify="center" align="middle">
          <Col span={6}>
            <strong>Expiry Date</strong>
          </Col>
          <Col span={18}>
            <Input
              style={{ marginBottom: "10px" }}
              placeholder="Expiration Date"
              type="date"
            />
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <Col span={6}>
            <strong>CVV</strong>
          </Col>
          <Col span={18}>
            <Input
              style={{ marginBottom: "10px" }}
              placeholder="CVV"
              type="number"
            />
          </Col>
        </Row>

        <div style={{ textAlign: "center", marginTop: "15px" }}>
          <Button onClick={() => props.setShowOtpModal(true)}>Continue</Button>
        </div>
      </Modal>
    </>
  );
};

export default PaymentModal;
