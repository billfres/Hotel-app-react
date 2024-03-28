import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useTranslation } from "react-i18next";

const Footer = () => {
	const {t} = useTranslation();

	let today = new Date()
	return (
		<footer className="footer1">
			<Container>
				<Row>
					<Col xs={12} md={12} className="text-center">
						<p className="mb-0 footerc"> &copy; {today.getFullYear()} {t('HotelName')}</p>
					</Col>
				</Row>
			</Container>
		</footer>
	)
}

export default Footer
