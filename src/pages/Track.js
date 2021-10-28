import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TableData from "../components/TableData";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import BeatLoader from "react-spinners/BeatLoader";
import Progress from "../components/Progress";
import Address from "../components/Address";

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
  const TransitEventsStates = data?.TransitEvents.map((el) => el);

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
            <Progress
              CurrentStatus={CurrentStatus}
              trackingNumber={trackingNumber}
              orderStatus={orderStatus}
            />
            <Container>
              <Row>
                <Address />
                <TableData orderStatus={orderStatus} />
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
