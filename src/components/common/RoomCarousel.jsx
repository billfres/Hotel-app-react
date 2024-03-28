// RoomCarousel.js

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getAllRooms } from "../../utils/ApiFunctions";
import { Link } from "react-router-dom";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";

const RoomCarousel = () => {
  const { t } = useTranslation(); // Utilisez useTranslation pour obtenir la fonction t.

  const [rooms, setRooms] = useState([{ id: "", roomType: "", roomPrice: "", photo: "" }]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAllRooms()
      .then((data) => {
        setRooms(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="mt-5">{t('Loading rooms...')}</div>;
  }
  if (errorMessage) {
    return <div className=" text-danger mb-5 mt-5">{t('Error')}: {errorMessage}</div>;
  }

  return (
    <section className="bg-light mb-5 mt-5 shadow">
      <Link to={"/browse-all-rooms"} className="hote-color text-center">
        {t('Browse all rooms')}
      </Link>

      <Container>
        <Carousel indicators={false}>
          {/* Vérification que rooms est un tableau et qu'il contient des éléments */}
          {Array.isArray(rooms) && rooms.length > 0 ? (
            // Utilisation de la méthode map sur rooms uniquement s'il contient des éléments
            [...Array(Math.ceil(rooms.length / 4))].map((_, index) => (
              <Carousel.Item key={index}>
                <Row>
                  {/* Utilisation de slice et map uniquement si rooms contient des éléments */}
                  {rooms.slice(index * 4, index * 4 + 4).map((room) => (
                    <Col key={room.id} className="mb-4" xs={12} md={6} lg={3}>
                      <Card>
                        <Link to={`/book-room/${room.id}`}>
                          <Card.Img
                            variant="top"
                            src={`data:image/png;base64, ${room.photo}`}
                            alt={t("Room Photo")}
                            className="w-100"
                            style={{ height: "200px" }}
                          />
                        </Link>
                        <Card.Body className="roomcardbody">
                          <Card.Title className="hotel-color">{room.roomType}</Card.Title>
                          <Card.Title className="room-price">${room.roomPrice}/night</Card.Title>
                          <div className="flex-shrink-0">
                            <Link to={`/book-room/${room.id}`} className="btn btn-hotel btn-sm">
                              {t("Book Now")}
                            </Link>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))
          ) : (
            // Affichage d'un message ou d'une indication si rooms est vide
            <p>No rooms available</p>
          )}
        </Carousel>
      </Container>


    </section>
  );
};

export default RoomCarousel;