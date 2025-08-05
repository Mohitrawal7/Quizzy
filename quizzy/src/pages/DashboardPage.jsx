import React, { useState, useEffect } from 'react';
import { Layout, Typography, Button, Row, Col, Card, Input, Empty, Spin } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios'; // You'll need an API service for this eventually

const { Content } = Layout;
const { Title, Text } = Typography;

const DashboardPage = () => {
    const [myQuizzes, setMyQuizzes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch the user's quizzes when the component mounts
        const fetchMyQuizzes = async () => {
            try {
                // IMPORTANT: In a real app, you'd get the auth token from context/storage
                const token = localStorage.getItem('authToken'); 
                const response = await axios.get('http://localhost:8080/api/quizzes/my-quizzes', {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                setMyQuizzes(response.data);
            } catch (error) {
                console.error("Failed to fetch quizzes", error);
                // Handle error (e.g., show notification)
            } finally {
                setLoading(false);
            }
        };

        fetchMyQuizzes();
    }, []);

    return (
        <Layout style={{ padding: '24px' }}>
            <Content>
                <Title level={2}>Welcome Back, User!</Title>

                {/* --- Section 1: Actions --- */}
                <Row gutter={[16, 16]} style={{ marginBottom: '32px' }}>
                    <Col xs={24} md={12}>
                        <Card title="Join a Quiz">
                            <Input.Search
                                placeholder="Enter Join Code"
                                enterButton="Join"
                                size="large"
                                onSearch={code => console.log(code)} // Logic to join quiz
                            />
                        </Card>
                    </Col>
                    <Col xs={24} md={12}>
                        <Card title="Create a New Quiz">
                            <Button type="primary" icon={<PlusOutlined />} size="large" block>
                                Create New Quiz
                            </Button>
                        </Card>
                    </Col>
                </Row>

                {/* --- Section 2: My Quizzes --- */}
                <Title level={3}>My Quizzes</Title>
                {loading ? (
                    <div style={{textAlign: 'center', padding: '50px'}}><Spin size="large" /></div>
                ) : myQuizzes.length > 0 ? (
                    <Row gutter={[16, 16]}>
                        {myQuizzes.map(quiz => (
                            <Col xs={24} sm={12} md={8} lg={6} key={quiz.id}>
                                <Card title={quiz.topic} bordered={false}>
                                    <p><strong>Code:</strong> {quiz.joinCode}</p>
                                    <p>{quiz.numberOfQuestions} Questions</p>
                                    <Text type="secondary">Created: {new Date(quiz.createdAt).toLocaleDateString()}</Text>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                ) : (
                    <Empty description="You haven't created any quizzes yet. Get started!" />
                )}
            </Content>
        </Layout>
    );
};

export default DashboardPage;