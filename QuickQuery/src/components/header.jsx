import React from "react";
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { DatabaseZap } from 'lucide-react';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";



import Stack from 'react-bootstrap/Stack';


function Header() { 
    return (
      <>
      <Container >
        <br />
        <br />
      <Row style={{marginLeft: "15%"}}>
          <Col>
            <Stack direction="horizontal" gap={3}>
              <DatabaseZap style={{color: "#359335"}} />
              <div className="p-2"><h3 className="title">QuickQuery</h3></div>
            </Stack>
          </Col>
          <Col xs={8}>
          <Nav defaultActiveKey="/home" as="ul" style={{fontFamily: "sora" , fontWeight: 600}}>
      <Nav.Item as="li">
        <Link to="/" className="link"> Home &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Link to="/features" className="link">Features &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Link to="https://github.com/srivanik8/QuickQuery" className="link">Github</Link>
      </Nav.Item>
    </Nav>
          </Col>
          </Row>
      </Container>
    </>  
    );
}
export default Header;