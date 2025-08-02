import { Typography, Layout, Card, Form, Input, Checkbox, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const { Title } = Typography;
const RegisterPage = () => {
  const [loading, setLoading] = useState(false);


   const onFinish = async (values) => {
    setLoading(true);
    try {
      await login(values);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
    <Card>
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <Title level={2}>Quizzy</Title>
        <p style={{ marginBottom: "0" }}>Login to your account</p>
      </div>
      <Form onFinish={onFinish} className="flex flex-col space-y-4">
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>

 <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            prefix={<LockOutlined />}
            type="email"
            placeholder="Email"
          />
        </Form.Item>

          <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>


         <Form.Item
          name="confirm password"
          label="Confirm Password"
          rules={[{ required: true, message: "Please confirm your password!" }]}
        >
          <Input
            prefix={<LockOutlined />}
            type="confirm your password"
            placeholder=" Confirm Password"
          />
        </Form.Item>

      

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: "100%" }}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Sign up"}
          </Button>
        </Form.Item>
      </Form>
   </Card>
    </div>
  );
};

export default RegisterPage