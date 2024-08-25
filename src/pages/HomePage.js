import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled, { ThemeContext } from "styled-components";
import { useAuth } from "../context/AuthContext";

const HomeWrapper = styled(Container)`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  min-height: 100vh;
  padding: 50px 0;
`;

function HomePage() {
  const { isAuthenticated, user } = useAuth();
  const theme = useContext(ThemeContext);

  return (
    <HomeWrapper>
      <Row>
        <Col>
          <h1>Welcome to the Ultimate React Site</h1>
          {isAuthenticated ? (
            <p>Hello, {user.name}! Explore your dashboard.</p>
          ) : (
            <p>Please login to access more features.</p>
          )}
        </Col>
      </Row>
    </HomeWrapper>
  );
}

export default HomePage;
