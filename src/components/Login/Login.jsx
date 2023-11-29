import React, { useContext, useState } from "react";
import "./Login.scss";
import { Form, Input, Button } from "antd";

import { UserContext } from "../../context/UserContext/UserState";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(UserContext);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const onFinish = (values) => {
    login(values);
    setTimeout(() => {
      navigate("/");
    }, 2000);
    setMsg("User connected succesfully");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <h3 className="h3Login">
        Hi, welcome to our platform. Please fill the following form to login. If
        you don't have an account click here to
        <Link id="link" to="/signup">register</Link>
      </h3>
      <div className="login">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="form"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your email" }]}
            className="input"
          >
            <Input className="input" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
            className="input"
          >
            <Input.Password className="input" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" className="button">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <p className="msg">{msg}</p>
      </div>
    </>
  );
};

export default Login;
