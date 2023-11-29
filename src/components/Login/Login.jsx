import React, { useContext, useState } from "react";
import "./Login.scss";
import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { UserContext } from "../../context/UserContext/UserState";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(UserContext);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const onFinish = (values) => {
    login(values);
    setTimeout(() => {
      navigate("/profile");
    }, 2000);
    setMsg("User connected succesfully");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <h3 className="h3Login">
        Hi, welcome to our platform. Please fill the following form to login.
      </h3>
      <>
        <Form
          name="normal_login"
          className="login-form form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter your email",
              },
            ]}
            className="input"
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
              className="input"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter your password",
              },
            ]}
            className="input"
            hasFeedback
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              className="input"
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }} className="buttons">
            <Button type="primary" htmlType="submit" className="custom-button">
              Log in
            </Button>
            <Button to="/signup">
              <Link type="link" className="custom-button">
                Go to register
              </Link>
            </Button>
          </Form.Item>
        </Form>
        <p className="msg">{msg}</p>
      </>
    </>
  );
};

export default Login;
