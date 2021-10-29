import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import { ProgressBar, Step } from "react-step-progress-bar";
import yellowCar from "assets/images/yellowCar.png";
import redCar from "assets/images/redCar.png";
import greencheck from "assets/images/greencheck.png";
import yellowcheck from "assets/images/yellowcheck.png";
import redcheck from "assets/images/redcheck.png";
import done from "assets/images/done.png";

const Progress = ({ CurrentStatus, trackingNumber, orderStatus }) => {
  return (
    <Container style={{ marginTop: "4%", marginBottom: "2%" }}>
      <Row
        style={{ border: "solid 1px", borderColor: "grey", paddingTop: "2%" }}
      >
        <Col>
          {" "}
          <h6> موعد التسليم خلال</h6>
          <h5>
            <span>2020</span> <span>3</span> <span>يناير</span>
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
        <Row style={{ padding: "2% 5%", transform: "rotate(180deg)" }}>
          <ProgressBar
            stepPositions={[0, 33, 66, 100]}
            percent={
              orderStatus === "DELIVERED"
                ? 100
                : orderStatus === "DELIVERED_TO_SENDER"
                ? 66
                : orderStatus === "TICKET_CREATED" && 66
            }
            filledBackground={
              orderStatus === "DELIVERED"
                ? "green"
                : orderStatus === "DELIVERED_TO_SENDER"
                ? "red"
                : orderStatus === "TICKET_CREATED" && "yellow"
            }
          >
            <Step transition="scale">
              {({ accomplished }) => (
                <img
                  alt={"imgStatus"}
                  style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                  width="30"
                  src={
                    orderStatus === "DELIVERED"
                      ? greencheck
                      : orderStatus === "DELIVERED_TO_SENDER"
                      ? redcheck
                      : orderStatus === "TICKET_CREATED" && yellowcheck
                  }
                />
              )}
            </Step>
            <Step transition="scale">
              {({ accomplished }) => (
                <img
                  alt={"imgStatus"}
                  style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                  width="30"
                  src={
                    orderStatus === "DELIVERED"
                      ? greencheck
                      : orderStatus === "DELIVERED_TO_SENDER"
                      ? redcheck
                      : orderStatus === "TICKET_CREATED" && yellowcheck
                  }
                />
              )}
            </Step>
            <Step transition="scale">
              {({ accomplished }) => (
                <img
                  alt={"imgStatus"}
                  style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                  width="30"
                  src={
                    orderStatus === "DELIVERED"
                      ? greencheck
                      : orderStatus === "DELIVERED_TO_SENDER"
                      ? redCar
                      : orderStatus === "TICKET_CREATED" && yellowCar
                  }
                />
              )}
            </Step>
            <Step transition="scale">
              {({ accomplished }) => (
                <img
                  alt={"imgStatus"}
                  style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                  width="30"
                  src={
                    orderStatus === "DELIVERED"
                      ? greencheck
                      : (orderStatus === "DELIVERED_TO_SENDER" ||
                          orderStatus === "TICKET_CREATED") &&
                        done
                  }
                />
              )}
            </Step>
          </ProgressBar>
        </Row>
        <Row>
          <Col style={{ textAlign: "left" }}>تم التسليم</Col>
          <Col style={{ paddingRight: "12.3%" }}>
            الشحنة خرجت للتسليم
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
          <Col style={{ paddingRight: "6.5%" }}>تم إستلام الشحنة من التاجر</Col>
          <Col>تم إنشاء الشحنة</Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Progress;
