import React from "react";
import Form from "components/Form";

const InvalidTrack = () =>  (
  
    <div
      style={{
        maxWidth:"400px",
        margin: "5% auto",
        boxShadow: "0 1px 2px 1px black",
        padding: "2%",
        borderRadius: "5px",
        textAlign:"right"
      }}
    >
          <p>رقم الشحنة هذا غير صحيح</p>
          <h3 style={{ color: "red", marginBottom: "5%", fontWeight: "600" }}>
            تتبع شحنة أخرى
          </h3>
          <Form />
    </div>
  );


export default InvalidTrack;
