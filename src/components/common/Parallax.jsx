// Parallax.js

import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Parallax = () => {
  const { t } = useTranslation(); // Utilisez useTranslation pour obtenir la fonction t.

  return (
    <div className="parallax mb-5">
      <Container className="text-center px-5 py-5 justify-content-center">
        <div className="animated-texts bounceIn">
          <h1 className="bill">
            {t("Experience the Best hospitality at")}{" "}
            <span className="hotel-color">{t("HotelName")}</span>
          </h1>
          <h3>{t("We offer the best services for all your needs.")}</h3>
        </div>
      </Container>
    </div>
  );
};

export default Parallax;