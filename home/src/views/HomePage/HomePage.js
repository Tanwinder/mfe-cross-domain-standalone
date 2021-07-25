import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import './HomePage.scss';
import LeftPanel from '../../components/LeftPanel';
import RightPanel from '../../components/RightPanel';

const HomePage = () => {
  return (
    <Container fluid={true} className="homePage">
      <Row xs="12">
        <h2>Homepage</h2>
      </Row>
      <Row xs="2">
        <Col className="homePage__col">
          <LeftPanel />
        </Col>
        <Col className="homePage__col">
          <RightPanel />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
