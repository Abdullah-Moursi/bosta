import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "./Form";

const NotValid = () => {
  return (
    <Container
      style={{
        margin: "5% auto",
        width: "30%",
        padding: "10px",
        boxShadow: "0 1px 2px 1px black",
        padding: "2%",
        borderRadius: "5px",
      }}
    >
      <Row>
        <Col>
          <p>رقم الشحنة هذا غير صالح</p>
          <h3 style={{ color: "red", marginBottom: "5%", fontWeight: "600" }}>
            تتبع شحنة أخرى
          </h3>
          <Form />
        </Col>
      </Row>
    </Container>
  );
};

export default NotValid;
