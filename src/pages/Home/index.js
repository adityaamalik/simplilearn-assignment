import { useState } from "react";
import { Tabs, Input, Button } from "antd";
import { UserOutlined, UserAddOutlined } from "@ant-design/icons";
import axios from "axios";

const { TabPane } = Tabs;

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (type) => {
    axios
      .post(`/users/${type}`, { email: email, password: password })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div
        style={{
          textAlign: "center",
          marginTop: "200px",
          marginBottom: "30px",
          marginLeft: "10px",
          marginRight: "10px",
        }}
      >
        <img src="fullLogo.png" alt="simplilearn" height="90px" width="auto" />

        <Tabs defaultActiveKey="1" centered>
          <TabPane
            tab={
              <span>
                <UserOutlined />
                LOGIN
              </span>
            }
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
      </div>
    </>
  );
};

export default Home;
