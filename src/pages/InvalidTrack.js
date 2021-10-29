import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Form from "components/Form";

const InvalidTrack = () => {
  return (
    <Container
      style={{
        margin: "5% auto",
        width: "30%",
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

export default InvalidTrack;
