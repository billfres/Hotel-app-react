import React from "react"
import { Link, useLocation } from "react-router-dom"
import Header from "../common/Header"
import { useTranslation } from "react-i18next";

const BookingSuccess = () => {
	const { t } = useTranslation();

	const location = useLocation()
	const message = location.state?.message
	const error = location.state?.error
	return (
		<div className="container">
			<Header title="Booking Success" />
			<div className="mt-5">
				{message ? (
					<div>
						<h3 className="text-success"> {t('Booking Success!')}</h3>
						<p className="text-success">{message}</p>
					</div>
				) : (
					<div>
						<h3 className="text-danger"> {t('Error Booking Room!')}</h3>
						<p className="text-danger">{error}</p>
						
					</div>
				)}
			</div>
		</div>
	)
}

export default BookingSuccess
