import React from "react";
import { useTranslation } from "react-i18next";

const MainHeader = () => {
    const { t } = useTranslation();

    return (
        <header className="header-banner">
            <div className="overlay"></div>
            <div className="animated-texts overlay-content">
                <h1>
                    {t("Welcome to")} <span className="hotel-color">{t("HotelName")}</span>
                </h1>
                <h4>{t("Experience the Best Hospitality in Town")}</h4>
            </div>
        </header>
    );
};

export default MainHeader;
