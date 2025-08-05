import { Typography, Layout, Card, Form, Input, Checkbox, Button } from "antd";
import { UserOutlined, LockOutlined,MailOutlined } from "@ant-design/icons";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const { Title } = Typography;

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    console.log(values.password);
    console.log(values.confirmPassword);
    if (values.password !== values.confirmPassword) {
      alert("Passwords do not match");
      setLoading(false);
      return;
    }
    try {
      await axios.post("http://localhost:8080/api/auth/register", values);
      alert("Registration successful");

      navigate("/login");
    } catch (error) {
      console.error("registration failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <Card>
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <Title level={2}>Quizzy</Title>
          <p style={{ marginBottom: "0" }}>Signup for your account</p>
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
            <Input prefix={<MailOutlined />} type="email" placeholder="Email" />
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
            name="confirmPassword"
            label="ConfirmPassword"
            rules={[
              { required: true, message: "Please confirm your password!" },
            ]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
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
          <Form.Item style={{ textAlign: "center" }}>
            Already have an account? <Link to="/login">Log in now!</Link>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default RegisterPage;
