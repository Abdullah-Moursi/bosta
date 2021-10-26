import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import logo from "../../src/logo.png";
import Stack from "react-bootstrap/Stack";

import "../App.css";

const Header = () => {
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



              <Stack direction="horizontal" gap={4}>
  <Form.Control className="me-auto" placeholder="Add your item here..." />
  <Button variant="secondary">Submit</Button>
</Stack>



              {/* <Form>
                <Row className="align-items-center">
                  <Col xs="auto" className="my-1">
                    <Button type="submit">Submit</Button>
                  </Col>

                  <Col sm={3} className="my-1">
                    <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                      number
                    </Form.Label>
                    <Form.Control
                      id="inlineFormInputName"
                      placeholder="رقم الشحنة"
                    />
                  </Col>
                </Row>
              </Form> */}
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
