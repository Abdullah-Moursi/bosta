import React from "react";
import { BiSearch } from "react-icons/bi";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Form = ({ input, setInput }) => {
  return (
    <Row>
      <Col sm={2}>
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
      <Col sm={10}>
        <input
          style={{ textAlign: "right" }}
          type="number"
          placeholder="رقم الشحنة"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </Col>
    </Row>
  );
};

export default Form;
