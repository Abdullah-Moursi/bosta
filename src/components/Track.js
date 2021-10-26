import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import question from "../../src/question.png";
import Image from "react-bootstrap/Image";
import Button from "@mui/material/Button";
import Canceled from "../../src/canceled.png";
import Delivered from "../../src/delivered.png";
import Pending from "../../src/pending.png";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { color } from "@mui/system";

const Track = () => {
  const [orderStatus, setOrderStatus] = useState("");

  return (
    <div>
      <li>
        <Link to="/">home</Link>
      </li>
      <Header />
      <ButtonGroup aria-label="Basic example">
        <Button onClick={() => setOrderStatus("delivered")} variant="secondary">
          delivered
        </Button>
        <Button onClick={() => setOrderStatus("pending")} variant="secondary">
          pending
        </Button>
        <Button onClick={() => setOrderStatus("canceled")} variant="secondary">
          canceled
        </Button>
      </ButtonGroup>
      <Container style={{ marginTop: "4%", marginBottom: "2%" }}>
        <Row style={{ border: "solid 1px", borderColor: "grey" }}>
          <Col>
            {" "}
            <h6> موعد التسليم خلال</h6>
            <h5>3 يناير 2020 </h5>
          </Col>
          <Col>
            {" "}
            <h6> اسم التاجر </h6>
            <h5>SOUQ.COM </h5>
          </Col>
          <Col>
            {" "}
            <h6> آخر تحديث </h6>
            <h5>الاثنين 12\5\2019 5am </h5>
          </Col>
          <Col>
            {" "}
            <h6> 6545465 رقم الشحنة</h6>
            <h5
              id={
                orderStatus === "delivered"
                  ? "green"
                  : orderStatus === "pending"
                  ? "yellow"
                  : "red"
              }
            >
              {orderStatus === "delivered"
                ? "تم تسليم الشحنة"
                : orderStatus === "pending"
                ? "لم يتم تسليم الشحنة"
                : "تم إلغاء الشحنة"}
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
                orderStatus === "delivered"
                  ? Delivered
                  : orderStatus === "pending"
                  ? Pending
                  : Canceled
              }
            />
          </Row>
          <Col>تم التسليم</Col>
          <Col>
            <h6>الشحنة خرجت للتسليم</h6>

            <p
              id={
                orderStatus === "delivered"
                  ? "green"
                  : orderStatus === "pending"
                  ? "yellow"
                  : "red"
              }
            >
              {orderStatus === "delivered"
                ? `space`
                : orderStatus === "pending"
                ? "العميل غير متواجد في العنوان"
                : "تم إلغاء الشحنة من التاجر"}
            </p>
          </Col>
          <Col>تم إستلام الشحنة من التاجر</Col>
          <Col>تم إنشاء الشحنة</Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col sm={4}>
            {" "}
            <h5>عنوان التسليم</h5>
            <Container fluid>
              <Row id = 'address'
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
              <Row style={{ marginTop: "2%", border: "solid gray 1px" }}>
                <Col sm={8}>
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
                <Col sm={4}>
                  {" "}
                  <Image src={question} />
                </Col>
              </Row>
            </Container>
          </Col>{" "}
          <Col sm={8}>
            <h5>تفاصيل الشحنة</h5>
            <Table style={{ border: "solid 1px", borderColor: "gray" }}>
              <thead>
                <tr>
                  <th>تفاصيل</th>
                  <th>الوقت</th>
                  <th>التاريخ</th>
                  <th>الفرع</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>تم إنشاء الشحنة</td>
                  <td>12:30 pm</td>
                  <td>05/04/2020</td>
                  <td>مدينة نصر</td>
                </tr>
                <tr>
                  <td>تم إستلام الشحنة من التاجر</td>
                  <td>12:30 pm</td>
                  <td>05/04/2020</td>
                  <td>مدينة نصر</td>
                </tr>
                <tr>
                  <td> الشحنة خرجت للتسليم</td>
                  <td>12:30 pm</td>
                  <td>05/04/2020</td>
                  <td>مدينة نصر</td>
                </tr>
                <tr>
                  <td
                    id={
                      orderStatus === "delivered"
                        ? "green"
                        : orderStatus === "pending"
                        ? "yellow"
                        : "red"
                    }
                  >
                    {orderStatus === "delivered"
                      ? `تم التسليم`
                      : orderStatus === "pending"
                      ? "العميل غير متواجد في العنوان"
                      : "تم إلغاء الشحنة من التاجر"}
                  </td>
                  <td>12:30 pm</td>
                  <td>05/04/2020</td>
                  <td>مدينة نصر</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default Track;
