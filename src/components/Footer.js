import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <Container>
        <Row>
          <Col md={12}>
            &copy; {new Date().getFullYear()} Ultimate React Site. All Rights
            Reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
