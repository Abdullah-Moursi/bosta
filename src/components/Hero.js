import React from "react";
import { Card } from "react-bootstrap";
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
            textAlign: "right",
          }}
        >
          <Card.Title
            style={{
              fontSize: "190%",
              fontWeight: "700",
            }}
          >
            مع بوسطة, اشحن مكان ما تحب
          </Card.Title>
          <Card.Text
            style={{
              fontSize: "109%",
            }}
          >
            وصّل منتجاتك أسرع وأوفر مع بوسطة لأي مكان في مصر بأقل
            <br />
            سعر ومجهود وتابع تحركات الشحن والمندوب أول بأول من غير
            <br />
            تأخير ولا تعب في الفواتير
          </Card.Text>

          <div
            style={{
              marginTop: "3.5%",
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
            </Button>{" "}
          </div>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Hero;
