import React from "react";

import yellowCar from "../../src/./assets/images/yellowCar.png";
import redCar from "../../src/./assets/images/redCar.png";
import done from "../../src/./assets/images/done.png";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { ProgressBar, Step } from "react-step-progress-bar";

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
          <ProgressBar
            percent={
              orderStatus === "DELIVERED"
                ? 100
                : orderStatus === "DELIVERED_TO_SENDER"
                ? 100
                : orderStatus === "TICKET_CREATED" && 100
            }
            filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
          >
            <Step transition="scale">
              {({ accomplished }) => (
                <img
                  alt={"imgStatus"}
                  style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                  width="30"
                  src={
                    orderStatus === "DELIVERED"
                      ? "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Eo_circle_light-green_white_checkmark.svg/2048px-Eo_circle_light-green_white_checkmark.svg.png"
                      : (orderStatus === "DELIVERED_TO_SENDER" ||
                          orderStatus === "TICKET_CREATED") &&
                        done
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
                      ? "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Eo_circle_light-green_white_checkmark.svg/2048px-Eo_circle_light-green_white_checkmark.svg.png"
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
                      ? "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Eo_circle_light-green_white_checkmark.svg/2048px-Eo_circle_light-green_white_checkmark.svg.png"
                      : orderStatus === "DELIVERED_TO_SENDER"
                      ? "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Eo_circle_red_white_checkmark.svg/1024px-Eo_circle_red_white_checkmark.svg.png"
                      : orderStatus === "TICKET_CREATED" &&
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Eo_circle_yellow_white_checkmark.svg/1024px-Eo_circle_yellow_white_checkmark.svg.png"
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
                      ? "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Eo_circle_light-green_white_checkmark.svg/2048px-Eo_circle_light-green_white_checkmark.svg.png"
                      : orderStatus === "DELIVERED_TO_SENDER"
                      ? "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Eo_circle_red_white_checkmark.svg/1024px-Eo_circle_red_white_checkmark.svg.png"
                      : orderStatus === "TICKET_CREATED" &&
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Eo_circle_yellow_white_checkmark.svg/1024px-Eo_circle_yellow_white_checkmark.svg.png"
                  }
                />
              )}
            </Step>
          </ProgressBar>
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
