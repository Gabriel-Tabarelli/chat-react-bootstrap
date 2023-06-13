import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <Card className='p-0 card-dark-pattern' style={{ width: '90%', height: '85%' }}>

      <Row style={{ height: '10%' }}>
        <Col xs={3}>teste</Col>
        <Col xs={9}>teste</Col>
      </Row>

      <Row style={{ height: '80%' }}>
        <Col xs={3}>teste</Col>
        <Col xs={9}>teste</Col>
      </Row>

      <Row style={{ height: '10%' }}>
        <Col xs={3}>teste</Col>
        <Col xs={9}>teste</Col>
      </Row>

      </Card>
    </Container>
  );
}

export default Home;