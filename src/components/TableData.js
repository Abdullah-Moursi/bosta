import React from "react";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";


const TableData = ({ orderStatus }) => {
  return (
    
                      <Col sm={8}>

      <h5>تفاصيل الشحنة</h5>

      <Table style={{ border: "solid 1px", borderColor: "gray" }}>
        <thead>
          <tr>
            <th>تفاصيل</th>
            <th>الوقت</th>
            <th>التاريخ</th>
            <th>الفرع</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>تم انشاء الشحنة </td>

            <td>12:30 pm</td>
            <td>05/04/2020</td>
            <td>مدينة نصر</td>
          </tr>
          <tr>
            <td>تم إستلام الشحنة من التاجر</td>
            <td>12:30 pm</td>
            <td>05/04/2020</td>
            <td>مدينة نصر</td>
          </tr>
          <tr>
            <td> الشحنة خرجت للتسليم</td>
            <td>12:30 pm</td>
            <td>05/04/2020</td>
            <td>مدينة نصر</td>
          </tr>
          <tr>
            <td
              id={
                orderStatus === "DELIVERED"
                  ? "green"
                  : orderStatus === "DELIVERED_TO_SENDER"
                  ? "red"
                  : orderStatus === "TICKET_CREATED" && "yellow"
              }
            >
              {orderStatus === "DELIVERED"
                ? `تم التسليم`
                : orderStatus === "DELIVERED_TO_SENDER"
                ? "تم إلغاء الشحنة من التاجر"
                : orderStatus === "TICKET_CREATED" &&
                  "العميل غير متواجد في العنوان"}
            </td>
            <td>12:30 pm</td>
            <td>05/04/2020</td>
            <td>مدينة نصر</td>
          </tr>
        </tbody>
      </Table>
      </Col>
  );
};

export default TableData;
