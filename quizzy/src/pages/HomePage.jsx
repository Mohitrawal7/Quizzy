import React, { useState, useEffect } from "react";
import { Typography, Row, Col, Card, Button, Spin, Layout } from "antd";
const { Title } = Typography;
const { Meta } = Card;

const HomePage = () => {

  return (
    <>
      <Layout className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div>
          <Title level={3}>Welcome to Quizzy</Title>
          <p>Test your IQ with our quizzes</p>
          <p>Get ready to check your IQ</p>

    <p>Login or Register to start</p>
    <p>Have fun and learn something new</p>
</div>

</Layout>
</>
  )
}

export default HomePage