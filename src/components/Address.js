import React from "react";
import { Col, Row, Container, Button, Image } from "react-bootstrap";
import question from "assets/images/question.png";

const Address = () => {
  return (
    
    <Col sm={4}>
      <h5>عنوان التسليم</h5>
      <Container fluid>
        <Row
          id="address"
          style={{
            border: "solid gray 1px",
          }}
        >
          <Col>
            <p style={{ padding: "3% 6%" }}>
              امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل 17 بلوك
              33..cairo
            </p>
          </Col>
        </Row>

        <Row style={{ marginTop: "2%", border: "solid gray 1px", padding:"5% 0"}}>
          <Col md={6}>
            <h5>هل يوجد مشكلة في شحنتك؟</h5>
            <Button
              id="homeButtons"
              style={{
                backgroundColor: "red",
                padding: "3% 16%",
                marginBottom: "8%",
              }}
              variant="danger"
            >
              إبلاغ عن مشكلة
            </Button>
          </Col>
          <Col md={6}>
            <Image  src={question} />
          </Col>
        </Row>
      </Container>
    </Col>
  );
};

export default Address;
