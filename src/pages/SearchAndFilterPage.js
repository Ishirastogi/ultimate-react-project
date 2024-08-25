import React, { useState } from "react";
import { Container, Form, Row, Col, Table, Button } from "react-bootstrap";
import usePagination from "../hooks/usePagination";
// import styles from "../styles/DataTable.module.css";

function SearchAndFilterPage({ items }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const filteredItems = items
    .filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
    .filter((item) => filter === "all" || item.category === filter);
  const { currentData, currentPage, maxPage, next, prev } = usePagination(
    filteredItems,
    10
  );

  return (
    <Container>
      <h1>Search and Filter</h1>
      <Form>
        <Row>
          <Col md={6}>
            <Form.Control
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </Col>
          <Col md={4}>
            <Form.Control
              as="select"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
            </Form.Control>
          </Col>
        </Row>
      </Form>

      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {currentData().map((item, index) => (
            <tr key={index}>
              <td>{(currentPage - 1) * 10 + index + 1}</td>
              <td>{item.name}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-between">
        <Button onClick={prev} disabled={currentPage === 1}>
          Previous
        </Button>
        <Button onClick={next} disabled={currentPage === maxPage}>
          Next
        </Button>
      </div>
    </Container>
  );
}

export default SearchAndFilterPage;
