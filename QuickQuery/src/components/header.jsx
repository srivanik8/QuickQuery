import React from "react";
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { DatabaseZap } from 'lucide-react';
import { Link } from "react-router-dom";

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
              <DatabaseZap style={{color: "#359335"}} />
              <div className="p-2"><h3 className="title">QuickQuery</h3></div>
            </Stack>
          </Col>
          <Col xs={8}>
          <nav>
            <ul className="sora">
            <Link className="link" to="/"><li>Home &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li></Link>
            <Link className="link" to="/features"><li>Features &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li></Link>
            <Link className="link" to="https://www.mongodb.com/community/"><li>Community &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li></Link>
            <Link className="link" to="https://github.com/srivanik8/QuickQuery"><li>Github</li></Link>
            </ul>
          </nav>
          </Col>
          </Row>
      </Container>
    </>  
    );
}
export default Header;