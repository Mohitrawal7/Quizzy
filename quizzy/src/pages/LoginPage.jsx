import { Typography, Layout, Card, Form, Input, Checkbox, Button } from "antd";
import { useNavigate,Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const { Title } = Typography;

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
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

        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a style={{ float: "right" }} href="">
            Forgot password?
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: "100%" }}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </Form.Item>
           <Form.Item style={{ textAlign: "center" }}>
            NO Account? <Link to="/register">Sign up now!</Link>
          </Form.Item>
      </Form>
   </Card>
    </div>
  );
};

export default LoginPage;
