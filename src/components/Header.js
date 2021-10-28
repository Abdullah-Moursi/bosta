import React, { useState } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../../src/./assets/images/logo.png";
import { BiSearch } from "react-icons/bi";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../App.css";
import History from "./History";
import Form from "./Form";

const Header = () => {
  const [input, setInput] = useState("");

  const submitAction = (e) => {
    e.preventDefault();
    History.push("/shipments/track/" + input);
    setInput("");
  };

  return (
    <Navbar className="navbar" sticky="top" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="me-auto" id="lang">
              ENG
            </Nav.Link>
            <Nav.Link id="linkItem" href="https://business.bosta.co/signin">
              تسجيل الدخول
            </Nav.Link>
            <NavDropdown
              style={{ borderLeft: "solid 1px", borderColor: "gray"}}
              title="تتبع شحنتك"
              id="collasible-nav-dropdown"
            >
              <h2 style={{ color: "red", fontWeight: "600" }}>تتبع شحنتك</h2>
              <p>اكتب رقم الشحنة وتابع شحنتك خطوة بخطوة</p>
              <form onSubmit={submitAction}>
                <Container>
                  <Form input={input} setInput={setInput} />
                </Container>
              </form>
            </NavDropdown>
          </Nav>
          <Nav>
            {" "}
            <Nav.Link id="linkItem" href="https://bosta.co/ar/contact-sales/">
              كلم المبيعات
            </Nav.Link>
            <Nav.Link id="linkItem" href="https://bosta.co/ar/pricing/">
              {" "}
              الأسعار
            </Nav.Link>
            <Nav.Link id="linkItem" href="https://bosta.co/ar/">
              الرئيسية
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand id="homeLogo" href="#home">
          بوسطة
          <span>
            <img className="navLogo" src={logo} alt="logo" />
          </span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
