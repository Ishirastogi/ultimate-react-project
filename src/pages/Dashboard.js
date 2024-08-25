import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../redux/slices/userSlice";
import { Container, Spinner, Alert } from "react-bootstrap";

function Dashboard() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const status = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUserData());
    }
  }, [status, dispatch]);

  let content;

  if (status === "loading") {
    content = <Spinner animation="border" />;
  } else if (status === "succeeded") {
    content = <div>Welcome, {user.name}!</div>;
  } else if (status === "failed") {
    content = <Alert variant="danger">{error}</Alert>;
  }

  return (
    <Container>
      <h1>Dashboard</h1>
      {content}
    </Container>
  );
}

export default Dashboard;
