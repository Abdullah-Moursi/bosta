import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import History from "utils/History";

const Form = ({ setIsFormSubmitted }) => {
  const [query, setQuery] = useState("");

  const submitAction = (e) => {
    e.preventDefault();
    History.push(`/shipments/track/${query}`);
    setQuery("");
    setIsFormSubmitted(true);
  };

  return (
    <form onSubmit={submitAction}>
      <Container fluid>
        <Row>
            <Col  md={4}>
              <button
                style={{
                  borderRadius: "50%",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  fontSize: "120%",
                }}
                type="submit"
              >
                <BiSearch />
              </button>
            </Col>
            <Col md={{ span: 4, offset: 1 }}>
              <input
                style={{ textAlign: "right"}}
                type="number"
                placeholder="رقم الشحنة"
                value={query}
                required
                onChange={(e) => setQuery(e.target.value)}
              />
            </Col>
        </Row>
      </Container>
    </form>
  );
};

export default Form;
