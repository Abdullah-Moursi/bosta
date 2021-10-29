import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import Button from "@mui/material/Button";
import header from "assets/images/header.jpg";

const Hero = () => {
  return (
    <div>
      <Card className="text-white">
        <Card.Img src={header} alt="Card image" />
        <Card.ImgOverlay
          style={{
            padding: "4% 20%",
          }}
        >
          <Container>
            <Row>
              <Col xs={{ order: 1 }}>
                <h1
                  style={{
                    fontSize: "190%",
                    fontWeight: "700",
                  }}
                >
                  مع بوسطة, اشحن مكان ما تحب
                </h1>{" "}
                <p
                  style={{
                    fontSize: "109%",
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

            {/* <Row>
              <Col xs={{ order: 1 }}>
                <p
                  style={{
                    fontSize: "109%",
                  }}
                >
                  وصّل منتجاتك أسرع وأوفر مع بوسطة لأي مكان في مصر بأقل سعر
                  ومجهود وتابع تحركات الشحن والمندوب أول بأول من غير تأخير ولا
                  تعب في الفواتير
                </p>{" "}
              </Col>
            </Row>

            <Row>
              <Col xs={{ order: 1 }}>
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
            </Row> */}
          </Container>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Hero;
