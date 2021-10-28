import React from "react";
import Canceled from "../../src/./assets/images/canceled.png";
import Delivered from "../../src/./assets/images/delivered.png";
import Pending from "../../src/./assets/images/pending.png";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Progress = ({ CurrentStatus, trackingNumber, orderStatus }) => {
  return (
    <Container style={{ marginTop: "4%", marginBottom: "2%" }}>
      <Row style={{ border: "solid 1px", borderColor: "grey", paddingTop:"2%"}}>
        <Col>
          {" "}
          <h6> موعد التسليم خلال</h6>
          <h5>
            <span>2020</span> <span>3</span> {"يتليت"}
          </h5>
        </Col>
        <Col>
          {" "}
          <h6> اسم التاجر </h6>
          <h5>SOUQ.COM </h5>
        </Col>
        <Col>
          {" "}
          <h6> آخر تحديث </h6>
          <h5>{CurrentStatus}</h5>
        </Col>
        <Col>
          {" "}
          <h6> {trackingNumber} رقم الشحنة</h6>
          <h5
            id={
              orderStatus === "DELIVERED"
                ? "green"
                : orderStatus === "DELIVERED_TO_SENDER"
                ? "red"
                : orderStatus === "TICKET_CREATED" && "yellow"
            }
          >
            {orderStatus === "DELIVERED"
              ? "تم تسليم الشحنة"
              : orderStatus === "DELIVERED_TO_SENDER"
              ? "تم إلغاء الشحنة"
              : orderStatus === "TICKET_CREATED" && "لم يتم تسليم الشحنة"}
          </h5>
        </Col>
      </Row>
      <Row
        style={{
          borderStyle: "none solid solid solid",
          borderWidth: "1px",
          borderColor: "grey",
        }}
      >
        <Row style={{ justifyContent: "center" }}>
          <Image
            src={
              orderStatus === "DELIVERED"
                ? Delivered
                : orderStatus === "DELIVERED_TO_SENDER"
                ? Canceled
                : orderStatus === "TICKET_CREATED" && Pending
            }
          />
        </Row>
        <Col>تم التسليم</Col>
        <Col>
          <h6>الشحنة خرجت للتسليم</h6>
          <p
            style={{ paddingBottom: "2%" }}
            id={
              orderStatus === "DELIVERED"
                ? "green"
                : orderStatus === "DELIVERED_TO_SENDER"
                ? "red"
                : orderStatus === "TICKET_CREATED" && "yellow"
            }
          >
            {orderStatus === "DELIVERED"
              ? ""
              : orderStatus === "DELIVERED_TO_SENDER"
              ? "تم إلغاء الشحنة من التاجر"
              : orderStatus === "TICKET_CREATED" &&
                "العميل غير متواجد في العنوان"}
          </p>
        </Col>
        <Col>تم إستلام الشحنة من التاجر</Col>
        <Col>تم إنشاء الشحنة</Col>
      </Row>
    </Container>
  );
};

export default Progress;
