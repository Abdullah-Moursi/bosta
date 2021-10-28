import React from "react";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";

const TableData = ({ orderStatus, TransitEventsStates }) => {
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
          {TransitEventsStates.map((el) => (
            <tr>
              <td>
                {el.state}
                <p
                  id={
                    orderStatus === "DELIVERED"
                      ? "green"
                      : orderStatus === "DELIVERED_TO_SENDER"
                      ? "red"
                      : orderStatus === "TICKET_CREATED" && "yellow"
                  }
                >
                  {el.reason}
                </p>
              </td>
              <td>{el.timestamp}</td>
              <td>{el.timestamp}</td>
              <td>{el.hub}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Col>
  );
};

export default TableData;
