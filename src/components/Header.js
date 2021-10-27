import React, { useState } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../../src/logo.png";

import "../App.css";

const Header = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const getInput = (e) => {
    setSearch(e.target.value);
  };


  const getQuery = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <Navbar className="navbar" sticky="top" collapseOnSelect expand="lg">
      <Container id="container">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link id="lang">ENG</Nav.Link>
            <Nav.Link id="linkItem" href="https://business.bosta.co/signin">
              تسجيل الدخول
            </Nav.Link>
            <NavDropdown title="تتبع شحنتك" id="collasible-nav-dropdown">
              <h3>تتبع شحنتك</h3>
              <form onSubmit={getQuery}>
                <input
                  required
                  onChange={getInput}
                  value={search}
                  type="number"
                  placeholder="تتبع شحنتك"
                />
                <li>
                  <button className="btn" type="submit">
                    ننبع
                  </button>
                </li>
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
