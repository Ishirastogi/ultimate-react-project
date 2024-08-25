import React, { useState, useContext } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

function ProfilePage() {
  const { user, isAuthenticated } = useContext(AuthContext);
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put("/api/user", { name, email });
      setSuccess("Profile updated successfully");
    } catch (err) {
      setError("Failed to update profile");
    }
  };

  return (
    <Container>
      <h1>Profile</h1>
      {isAuthenticated ? (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          {success && <Alert variant="success">{success}</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}

          <Button variant="primary" type="submit">
            Update Profile
          </Button>
        </Form>
      ) : (
        <Alert variant="warning">
          You must be logged in to view this page.
        </Alert>
      )}
    </Container>
  );
}

export default ProfilePage;
