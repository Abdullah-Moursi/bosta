import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import question from "../../src/./assets/images/question.png";
import Image from "react-bootstrap/Image";
import Button from "@mui/material/Button";
import Canceled from "../../src/./assets/images/canceled.png";
import Delivered from "../../src/./assets/images/delivered.png";
import Pending from "../../src/./assets/images/pending.png";
import BeatLoader from "react-spinners/BeatLoader";

const Track = () => {
  const { trackingNumber } = useParams();

  const [err, setErr] = useState(false);
  const [data, setData] = useState(null);

  const fetch = async () => {
    await axios
      .get(`https://tracking.bosta.co/shipments/track/${trackingNumber}`)
      .then((res) => {
        // res.data.error === "Invalid tracking number!" && setErr(true);
        console.log(res);
        setData(res.data);
        res.Status === 404 && setErr(true);
      });
  };

  useEffect(() => {
    fetch();
    //eslint-disable-next-line
  }, []);

  const orderStatus = data?.CurrentStatus.state;
  const CurrentStatus = data?.PromisedDate;
  const TransitEventsStates = data?.TransitEvents.map((el) => el.state);
  return (
    <div>
      <li>
        <Link to="/">home</Link>
      </li>
      <Header />
      {err && (
        <Container
          style={{
            width: "80%",
            height: "70vh",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Row>
            <Col>
              <h3>Please make sure you entered a valid order number :)</h3>
            </Col>
          </Row>
        </Container>
      )}
      {!data && !err ? (
        <Container
          style={{
            width: "80%",
            height: "70vh",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Row>
            <Col xs={12} md={12}>
              <BeatLoader color={"red"} loading={true} size={15} />
            </Col>
            <Col
              style={{
                marginTop: "1%",
              }}
              xs={12}
              md={12}
            ></Col>
          </Row>
        </Container>
      ) : (
        data &&
        !err && (
          <div>
            <Container style={{ marginTop: "4%", marginBottom: "2%" }}>
              <Row style={{ border: "solid 1px", borderColor: "grey" }}>
                <Col>
                  {" "}
                  <h6> موعد التسليم خلال</h6>
                  <h5>{CurrentStatus}</h5>
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
                      : orderStatus === "TICKET_CREATED" &&
                        "لم يتم تسليم الشحنة"}
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
                    id={
                      orderStatus === "DELIVERED"
                        ? "green"
                        : orderStatus === "DELIVERED_TO_SENDER"
                        ? "red"
                        : orderStatus === "TICKET_CREATED" && "yellow"
                    }
                  >
                    {orderStatus === "DELIVERED"
                      ? `space`
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
            <Container>
              <Row>
                <Col sm={4}>
                  {" "}
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
                          امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل 17
                          بلوك 33..cairo
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
                        <td>تم انشاء الشحنة </td>

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
                            orderStatus === "DELIVERED"
                              ? "green"
                              : orderStatus === "DELIVERED_TO_SENDER"
                              ? "red"
                              : orderStatus === "TICKET_CREATED" && "yellow"
                          }
                        >
                          {orderStatus === "DELIVERED"
                            ? `تم التسليم`
                            : orderStatus === "DELIVERED_TO_SENDER"
                            ? "تم إلغاء الشحنة من التاجر"
                            : orderStatus === "TICKET_CREATED" &&
                              "العميل غير متواجد في العنوان"}
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
          </div>
        )
      )}

      <Footer />
    </div>
  );
};

export default Track;
