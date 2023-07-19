"use client";
import React, { useState } from "react";
import { Form, Input, Button, Alert } from "antd";
import { register } from "@/api/auth";

const RegisterPage: React.FC = () => {
  const [registrationError, setRegistrationError] = useState<string | null>(
    null
  );
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    try {
      if (values.password.length < 6) {
        throw new Error("Password should be at least 6 characters long.");
      }
      await register(values);
      setRegistrationError(null);
    } catch (error) {
      console.error("Registration failed:", error);
      setRegistrationError("Invalid username or password. Please try again.");
    }
  };

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
        {registrationError && (
          <Alert
            message={registrationError}
            type="error"
            showIcon
            style={{ marginBottom: 16 }}
          />
        )}
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
          rules={[
            { required: true, message: "Please enter your password!" },
            {
              min: 6,
              message: "Password should be at least 6 characters long.",
            },
          ]}
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
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded focus:outline-none focus:shadow-outline mt-1"
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
