import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import Header from "./Header"
import {
	FaClock,
	FaCocktail,
	FaParking,
	FaSnowflake,
	FaTshirt,
	FaUtensils,
	FaWifi
} from "react-icons/fa"
import { useTranslation } from 'react-i18next';

const HotelService = () => {
	const { t } = useTranslation();
	return (
		<>
			<div className="mb-2">
				<Header title={"Our Services"} />

				<Row className="mt-4">
					<h4 className="text-center">
					{t('Services at')}<span className="hotel-color"> {t('Fresnel')} - </span>{t('Hotel')}
						<span className="gap-2">
							<FaClock className="ml-5" /> {t('24-Hour Front Desk')}
						</span>
					</h4>
				</Row>
				<hr />

				<Row xs={1} md={2} lg={3} className="g-4 mt-2">
					<Col>
						<Card className="hotel-service-card">
							<Card.Body>
								<Card.Title className="hotel-color">
									<FaWifi />{t('WiFi')}
								</Card.Title>
								<Card.Text>{t('Stay connected with high-speed internet access.')}</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card className="hotel-service-card">
							<Card.Body>
								<Card.Title className="hotel-color">
									<FaUtensils /> {t('Breakfast')}
								</Card.Title>
								<Card.Text>{t('Start your day with a delicious breakfast buffet.')}</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card className="hotel-service-card">
							<Card.Body>
								<Card.Title className="hotel-color">
									<FaTshirt /> {t('Laundry')}
								</Card.Title>
								<Card.Text>{t('Keep your clothes clean and fresh with our laundry service.')}</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card className="hotel-service-card">
							<Card.Body>
								<Card.Title className="hotel-color">
									<FaCocktail /> {t('Mini-bar')}
								</Card.Title>
								<Card.Text>{t('Enjoy a refreshing drink or snack from our in-room mini-bar.')}</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card className="hotel-service-card">
							<Card.Body>
								<Card.Title className="hotel-color">
									<FaParking /> {t('Parking')}
								</Card.Title>
								<Card.Text>{t('Park your car conveniently in our on-site parking lot.')}</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card className="hotel-service-card">
							<Card.Body>
								<Card.Title className="hotel-color">
									<FaSnowflake /> {t('Air conditioning')}
								</Card.Title>
								<Card.Text>{t('Stay cool and comfortable with our air conditioning system.')}</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</div>
			<hr />
		</>
	)
}

export default HotelService