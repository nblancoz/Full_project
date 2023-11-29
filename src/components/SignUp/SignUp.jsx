import React, { useContext, useState } from "react";
import "./SignUp.scss";
import { UserContext } from "../../context/UserContext/UserState";
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const { signUp } = useContext(UserContext);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const submit = async (values) => {
    try {
      if (!email.test(values.email)) {
        setMsg("Enter a valid email");
        return;
      }
      await signUp(values);
      setTimeout(() => {
        navigate("/");
      }, 3000);
      setMsg("User created sucesfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h3 className="welcome">
        Welcome! Here you can become a member of "name". Please fill the
        following form to register.
      </h3>
      <div className="singUp">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={submit}
          autoComplete="off"
          className="form"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
            className="item"
          >
            <Input className="input" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your email" }]}
            className="item"
          >
            <Input className="input" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
            className="item"
            hasFeedback
          >
            <Input.Password className="input" />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            className="item"
            rules={[
              {
                required: true,
                message: "Please confirm your password",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("The passwords don't match"));
                },
              }),
            ]}
          >
            <Input.Password className="input" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }} className="buttons">
            <Button type="primary" htmlType="submit" className="custom-button">
              Submit
            </Button>
            <Button to="/login">
              <Link type="link" className="custom-button">
                Go to login
              </Link>
            </Button>
          </Form.Item>
        </Form>
        <p>{msg}</p>
      </div>
    </>
  );
};

export default SignUp;
