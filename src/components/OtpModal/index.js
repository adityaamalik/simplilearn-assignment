import { Modal, Input, Button, message } from "antd";
import axios from "axios";
import { useState, useEffect } from "react";

const OtpModal = (props) => {
  const [otp, setOtp] = useState("");

  const makePayment = () => {
    if (otp !== "123456") {
      message.error("Wrong OTP");
    } else {
      message.success("Payment successful !", 1).then(() => {
        axios
          .post("/orders", {
            courses: props.selectedCourse,
            userId: localStorage.getItem("userId"),
          })
          .then(() => {
            window.location.pathname = "/courses";
          })
          .catch((err) => {
            message.error("Cannot create order !");
          });
      });
    }
  };

  return (
    <>
      <Modal
        centered
        footer={null}
        visible={props.showOtpModal}
        onCancel={() => {
          props.setShowOtpModal(false);
          props.setShowModal(false);
        }}
      >
        <div style={{ textAlign: "center", marginTop: "15px" }}>
          <h1>{props.selectedCourse.title}</h1>
        </div>

        <p>
          <span style={{ color: "gray" }}>Payment of</span> ₹{" "}
          {props.selectedCourse.price} /-
        </p>
        <p>Please enter the OTP</p>

        <Input
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          style={{ marginBottom: "10px" }}
          placeholder="OTP"
          type="number"
        />

        <div style={{ textAlign: "center", marginTop: "15px" }}>
          <Button onClick={makePayment}>Make Payment</Button>
        </div>
      </Modal>
    </>
  );
};

export default OtpModal;
