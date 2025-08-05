// import React, { useState, useEffect } from "react";
// import { Typography, Row, Col, Card, Button, Spin, Layout } from "antd";
// import Navbar from "../components/Navbar";
// import { Content } from "antd/es/layout/layout";
// const { Title } = Typography;
// const { Meta } = Card;

// const HomePage = () => {
//   return (
//     <>
//       <Layout style={{ minHeight: "100vh" }}>
//  <Navbar/>
//  <Content>

//           <Title level={3}>Welcome to Quizzy</Title>
          
//           <div>
//           <p>Test your IQ with our quizzes</p>
//           <p>Get ready to check your IQ</p>

//           <p>Login or Register to start</p>
//           <p>Have fun and learn something new</p>
//           </div>
//           <div></div>
// </Content>
//       </Layout>
//     </>
//   );
// };

// export default HomePage;



import React from 'react';
import { Layout, Typography, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const HomePage = () => {
    return (
        <Layout>
            <Content style={{ padding: '50px', textAlign: 'center', backgroundColor: '#fff' }}>
                <Row justify="center">
                    <Col xs={24} md={16} lg={12}>
                        <Title>Welcome to QuizHub!</Title>
                        <Paragraph style={{ fontSize: '18px' }}>
                            Create AI-powered quizzes in seconds. Challenge your friends in a live, real-time competition. 
                            Login or Register to start the fun!
                        </Paragraph>
                        <div style={{ marginTop: '24px' }}>
                            <Link to="/login">
                                <Button type="primary" size="large" style={{ marginRight: '16px' }}>
                                    Login
                                </Button>
                            </Link>
                            <Link to="/register">
                                <Button size="large">
                                    Register
                                </Button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
};

export default HomePage;