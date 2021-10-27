import React from "react";
import "../App.css";
import logo from "../../src/./assets/images/logo.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter
      style={{
        color: "white",
      }}
      color="grey darken-4"
      className="font-big "
    >
      <MDBContainer fluid className="text-center text-md-right">
        <MDBRow>
          <MDBCol style={{ marginTop: "3.8%" }} md="3">
            <h5 style={{ color: "red" }} className="footerTitle">
              عن بوسطة
            </h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://bosta.co/ar/contact-sales/">كلم المبيعات</a>
              </li>
              <li className="list-unstyled">
                <a href="https://bosta.co/ar/%d8%b3%d9%8a%d8%a7%d8%b3%d8%a9-%d8%a7%d9%84%d8%ae%d8%b5%d9%88%d8%b5%d9%8a%d8%a9/">سياسة الخصوصية </a>
              </li>
              <li className="list-unstyled">
                <a href="https://bosta.co/ar/terms-conditions/"> الشروط والأحكام </a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol style={{ marginTop: "3.8%" }} md="3">
            <h5 style={{ color: "red" }} className="footerTitle">
              الشحنات
            </h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://bosta.co/ar/pricing/">التسعير</a>
              </li>
              <li className="list-unstyled">

                  {/* my link */}

                <a href="https://bosta.co/ar/tracking-shipment/">تتبع شحنتك</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol style={{ marginTop: "3.8%" }} md="4">
            <h5 className="footerTitle">
              بوسطة
              <span>
                <img
                  style={{
                    marginLeft: "1%",
                    maxWidth: "5%",
                  }}
                  className="footerLogo"
                  src={logo}
                  alt="logo"
                />
              </span>
            </h5>
            <p>help@bosta.co</p>
            <div style = {{fontSize: "150%", marginBottom:"2%"}}>
              <a href="https://twitter.com/bostaapp/">
                {" "}
                <FaTwitterSquare />
              </a>
              <a href="https://www.facebook.com/bostaapp/">
                {" "}
                <FaFacebookSquare />
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div id="footer" className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          <p>Copyright ©2019 bosta.co</p>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
