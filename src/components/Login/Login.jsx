import React, { useContext, useState } from "react";
import "./Login.scss";
import { Form, Input, Button } from "antd";

import { UserContext } from "../../context/UserContext/UserState";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(UserContext);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const onFinish = (values) => {
    login(values);
    setTimeout(() => {
      navigate("/profile");
    }, 2000);
    setMsg("User Connected Succesfully");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="login">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please enter your email" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <p>{msg}</p>
    </div>
  );
};

export default Login;
