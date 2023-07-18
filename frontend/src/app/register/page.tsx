"use client";
import React from "react";
import { Form, Input, Button } from "antd";

const RegisterPage: React.FC = () => {
  const onFinish = (values: any) => {
    // Handle form submission here
    console.log("Received values:", values);
  };

  const [form] = Form.useForm();

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Form
        form={form}
        name="register"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        className="bg-white shadow-md rounded px-8 py-6"
        style={{ width: 300 }}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please enter your username!" }]}
        >
          <Input
            placeholder="Username"
            className="border rounded w-full py-2 px-3"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input.Password
            placeholder="Password"
            className="border rounded w-full py-2 px-3"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded focus:outline-none focus:shadow-outline"
            style={{ width: "100%" }}
          >
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterPage;
