import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";
import TableData from "components/TableData";
import Progress from "components/Progress";
import Address from "components/Address";
import InvalidTrack from "./InvalidTrack";

const BASE_URL = "https://tracking.bosta.co/shipments/track/";

const Track = () => {
  const { trackingNumber } = useParams();

  const [data, setData] = useState(null);
  const [err, setErr] = useState(false);

  const fetchTrackingData = async () => {
    await axios
      .get(`${BASE_URL}${trackingNumber}`)
      .then((res) => {
        setErr(false);
        setData(res.data);
      })
      .catch((e) => setErr(true));
  };

  useEffect(() => {
    fetchTrackingData();
  }, [trackingNumber]);

  return (
    <div>
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
          <InvalidTrack />
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
              trackingNumber={trackingNumber}
              CurrentStatus={data?.PromisedDate}
              orderStatus={data?.CurrentStatus.state}
            />
            <Container>
              <Row>
                <Address />
                <TableData
                  trackingNumber={trackingNumber}
                  TransitEventsStates={data?.TransitEvents}
                  orderStatus={data?.CurrentStatus.state}
                />
              </Row>
            </Container>
          </div>
        )
      )}
    </div>
  );
};

export default Track;
