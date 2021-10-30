import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "@mui/material/Button";
import header from "assets/images/header.jpg";

const Hero = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${header})`,
          color: "white",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "70vh",
          width: "100vw",
        }}
      >
        <Container>
          <Row style={{paddingTop: "6%"}}>
            <Col xs={{ order: 1 }}>
              <h1
                style={{
                  fontSize: "190%",
                  fontWeight: "700"
                }}
              >
                مع بوسطة, اشحن مكان ما تحب
              </h1>{" "}
              <p
                style={{
                  fontSize: "109%",
                  fontWeight: "400"
                }}
              >
                وصّل منتجاتك أسرع وأوفر مع بوسطة لأي مكان في مصر بأقل
                <br /> سعر ومجهود وتابع تحركات الشحن والمندوب أول بأول من غير
                <br />
                تأخير ولا تعب في الفواتير
              </p>{" "}
              <div
                style={{
                  marginTop: "1.5%",
                }}
              >
                <Button
                  href="https://bosta.co/contact-shipping-sales/?lang=ar"
                  id="homeButtons"
                  style={{
                    borderStyle: "solid",
                    borderWidth: "2px",
                    backgroundColor: "transparent",
                    borderColor: "white",
                  }}
                >
                  كلم المبيعات
                </Button>
                <Button
                  style={{
                    backgroundColor: "red",
                  }}
                  href="https://business.bosta.co/signup"
                  id="homeButtons"
                >
                  ابدأ مع بوسطـة
                </Button>
              </div>{" "}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
