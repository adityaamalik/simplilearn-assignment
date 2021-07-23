import { Modal, Input, Tabs, Button, message } from "antd";
import { UserOutlined, UserAddOutlined } from "@ant-design/icons";
import axios from "axios";
import { useState } from "react";

const { TabPane } = Tabs;

const LoginAndSignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (type) => {
    axios
      .post(`/users/${type}`, { email: email, password: password })
      .then((res) => {
        localStorage.setItem("userId", res.data.user._id);
        localStorage.setItem("userEmail", res.data.user.email);
        localStorage.setItem("token", res.data.token);
        console.log(res.data);
        props.setShowLoginAndSignUpModal(false);
        if (type === "login") {
          message.success("Welcome back user");
        } else {
          message.success("Welcome to SimpliLearn");
        }
      })
      .catch((err) => {
        if (err.response.data === "Email Already registered") {
          message.error("E-mail is already registered");
        } else if (err.response.data === "password incorrect") {
          message.error("Password is incorrect !");
        } else if (err.response.data === "email incorrect") {
          message.error("Email not registered !");
        } else {
          message.error("Some error occured !");
        }
        console.log(err.response.data);
      });
  };
  return (
    <>
      <Modal
        centered
        footer={null}
        visible={props.showLoginAndSignUpModal}
        onCancel={() => {
          props.setShowLoginAndSignUpModal(false);
        }}
      >
        <div style={{ textAlign: "center", marginTop: "15px" }}>
          <img src="logo.jpeg" alt="simplilearn" height="90px" width="auto" />
        </div>

        <Tabs defaultActiveKey="1" centered>
          <TabPane
            tab={
              <span>
                <UserOutlined />
                LOGIN
              </span>
            }
            style={{ textAlign: "center" }}
            key="1"
          >
            <Input
              type="email"
              placeholder="Email"
              size="large"
              style={{ width: "200px" }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <Input
              type="password"
              placeholder="Password"
              size="large"
              style={{ width: "200px" }}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <Button onClick={() => submit("login")}>LOGIN</Button>
          </TabPane>
          <TabPane
            style={{ textAlign: "center" }}
            tab={
              <span>
                <UserAddOutlined />
                SIGNUP
              </span>
            }
            key="2"
          >
            <Input
              type="email"
              placeholder="Email"
              size="large"
              style={{ width: "200px" }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <Input
              type="password"
              placeholder="Password"
              size="large"
              style={{ width: "200px" }}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <Button onClick={() => submit("register")}>SIGN-UP</Button>
          </TabPane>
        </Tabs>
      </Modal>
    </>
  );
};

export default LoginAndSignUp;
