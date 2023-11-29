import React, { useContext, useState } from "react";
import "./Login.scss";
import { Button, Checkbox, Form, Input } from "antd";
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
        Hi, welcome to our platform. Please fill the following form to login.
      </h3>
      <div className="login">
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
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
            className="input"
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              className="input"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
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

          <Form.Item className="button">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            <Link to="/signup">register here</Link>
          </Form.Item>
        </Form>
        <p className="msg">{msg}</p>
      </div>
    </>
  );
};

export default Login;
