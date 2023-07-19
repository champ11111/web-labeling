"use client";
import React, { useState } from "react";
import { Form, Input, Button, Alert } from "antd";
import { login } from "@/api/auth";
import { useRouter } from "next/navigation";

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [loginError, setLoginError] = useState<string | null>(null);
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    try {
      await login(values);
      setLoginError(null);
      router.push("/data");
    } catch (error) {
      setLoginError("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Form
        form={form}
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        className="bg-white shadow-md rounded px-8 py-6"
        style={{ width: 300 }}
      >
        {loginError && (
          <Alert
            message={loginError}
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
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
