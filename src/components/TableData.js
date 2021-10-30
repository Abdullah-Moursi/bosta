import React from "react";
import { Table, Col } from "react-bootstrap";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { useTranslation } from "react-i18next";
import moment from "moment";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        TICKET_CREATED: "تم إنشاء التذكرة",
        PACKAGE_RECEIVED: "تم إستلام الشحنة من التاجر",
        NOT_YET_SHIPPED: "لم يتم الشحن بعد",
        IN_TRANSIT: "جاري الشحن",
        OUT_FOR_DELIVERY: "الشحنة خرجت للتسليم",
        RECEIVED_DELIVERY_LOCATION: "تم إستلام مكان التسليم",
        DELIVERY_FAILED: "فشل التوصيل",
        DELIVERED: "تم التسليم",
        "Alexandria Hub": "الأسكندرية",
        "Katamya Hub": "القطامية",
        "Bosta HQ": "مقر بوسطة الرئيسي",
        "Cairo Sorting Facility": "محطة فرز القاهرة",
        "Mohandseen Hub": "المهندسين",
        "Tanta Hub": "طنطا",
        WAITING_FOR_CUSTOMER_ACTION: "في إنتظار رد العميل",
        DELIVERED_TO_SENDER: "لم يتم تسليم الشحنة",
        "El Obour Hub": "مقر العبور",
        "Monufia Hub": "مقر المنوفية",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

const TableData = ({ orderStatus, TransitEventsStates }) => {
  const { t } = useTranslation();

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
            <tr key={el.timestamp}>
              <td>
                {t(`${el.state}`)}

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
              <td>{moment(el.timestamp).format(" h:mm a")}</td>

              <td>{moment(el.timestamp).format("DD/MM/YYYY")}</td>
              <td>{el.hub && t(`${el.hub}`)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Col>
  );
};

export default TableData;
