import React from "react";
import { Container, Button } from "react-bootstrap";

function ErrorPage({ statusCode }) {
  return (
    <Container className="text-center" style={{ padding: "100px 0" }}>
      <h1>
        {statusCode === 404 ? "404 - Page Not Found" : "500 - Server Error"}
      </h1>
      <p>Sorry, something went wrong. Please try again later.</p>
      <Button variant="primary" href="/">
        Go to Home
      </Button>
    </Container>
  );
}

export default ErrorPage;
