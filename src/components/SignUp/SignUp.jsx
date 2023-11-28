import React, { useContext, useState } from "react";
import "./SignUp.scss";
import Form from "antd/es/form/Form";
import Input from "antd/es/input/Input";
import { Button } from "antd";
import { UserContext } from "../../context/UserContext/UserState";

const SignUp = () => {
  const { signUp } = useContext(UserContext);
  const [msg, setMsg] = useState("");

  const submit = async (values) => {
    try {
      await signUp(values);
      console.log(values);
      setMsg("User created sucesfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
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
          className="input"
        >
          <Input className="input" />
        </Form.Item>
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
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <p>{msg}</p>
    </div>
  );
};

export default SignUp;
