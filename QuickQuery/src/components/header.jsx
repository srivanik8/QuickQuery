import React from "react";
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

function Header() { 
    return (
      <>
      <Container >
        <br />
        <br />
      <Row>
          <Col>
            <Stack direction="horizontal" gap={3}>
              <div ><img src="https://i.ibb.co/HrTXD3t/database-9343953.png" alt="logo" className="logo"/></div>
              <div className="p-2"><h3 className="title">QuickQuery</h3></div>
            </Stack>
          </Col>
          <Col xs={8}>
          <nav>
            <ul className="sora">
            <li>Home &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
            <li>Features &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
            <li>Community &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
            <li>Github</li>
            </ul>
          </nav>
          </Col>
          <Col>
            <button style= {{borderRadius : 120 , fontFamily: "manrope"}}>Sign in</button>
          </Col>
          </Row>
      </Container>
    </>  
    );
}
export default Header;