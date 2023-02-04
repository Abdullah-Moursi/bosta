import React, { useState } from "react";
import { NavDropdown, Navbar, Nav, Container } from "react-bootstrap";
import Form from "components/Form";
import logo from "assets/images/logo.png";

const Header = () => {
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
              style={{ borderLeft: "solid 1px", borderColor: "gray" }}
              title="تتبع شحنتك"
              id="collasible-nav-dropdown"
            >
              <div style={{ textAlign: "right", padding: "1% 7%" }}>
                <h2 style={{ color: "red", fontWeight: "600" }}>تتبع شحنتك</h2>
                <p> اكتب رقم الشحنة وتابع شحنتك خطوة بخطوة</p>
                <Form />
              </div>
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
            <Nav.Link id="linkItem" href="/">
              الرئيسية
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand id="homeLogo" href="/">
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
