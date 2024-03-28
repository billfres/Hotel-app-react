import React, { useState, useEffect } from "react"
import moment from "moment"
import Button from "react-bootstrap/Button"
import { useNavigate } from "react-router-dom"
import { useTranslation } from 'react-i18next';

const BookingSummary = ({ booking, payment, isFormValid, onConfirm }) => {
	const checkInDate = moment(booking.checkInDate)
	const checkOutDate = moment(booking.checkOutDate)
	const numberOfDays = checkOutDate.diff(checkInDate, "days")
	const [isBookingConfirmed, setIsBookingConfirmed] = useState(false)
	const [isProcessingPayment, setIsProcessingPayment] = useState(false)
	const navigate = useNavigate()

    const { t } = useTranslation();

	const handleConfirmBooking = () => {
		setIsProcessingPayment(true)
		setTimeout(() => {
			setIsProcessingPayment(false)
			setIsBookingConfirmed(true)
			onConfirm()
		}, 3000)
	}

	useEffect(() => {
		if (isBookingConfirmed) {
			navigate("/booking-success")
		}
	}, [isBookingConfirmed, navigate])

	return (
		<div className="row">
			<div className="col-md-6"></div>
			<div className="card card-body mt-5 card-booking-summary">
				<h4 className="card-title hotel-color">{t('Reservation Summary')}</h4>
				<p>
					{t('Name')}: <strong>{booking.guestFullName}</strong>
				</p>
				<p>
                {t('Email')}: <strong>{booking.guestEmail}</strong>
				</p>
				<p>
                {t('Check-in Date')}: <strong>{moment(booking.checkInDate).format("MMM Do YYYY")}</strong>
				</p>
				<p>
                {t('Check-out Date')}: <strong>{moment(booking.checkOutDate).format("MMM Do YYYY")}</strong>
				</p>
				<p>
                {t('Number of Days Booked')}: <strong>{numberOfDays}</strong>
				</p>

				<div>
					<h5 className="hotel-color">{t('Number of Guest')}</h5>
					<strong>
						{t('Adulte')}{booking.numOfAdults > 1 ? "s" : ""} : {booking.numOfAdults}
					</strong>
					<strong>
						<p>{t('Children')} : {booking.numOfChildren}</p>
					</strong>
				</div>

				{payment > 0 ? (
					<>
						<p>
                        {t('Total payment')}: <strong>${payment}</strong>
						</p>

						{isFormValid && !isBookingConfirmed ? (
							<Button variant="success" onClick={handleConfirmBooking}>
								{isProcessingPayment ? (
									<>
										<span
											className="spinner-border spinner-border-sm mr-2"
											role="status"
											aria-hidden="true"></span>
										{t('Booking Confirmed, redirecting to payment...')}
									</>
								) : (<> {t('Confirm Booking')} & {t('proceed to payment')}</>
									
								)}
							</Button>
						) : isBookingConfirmed ? (
							<div className="d-flex justify-content-center align-items-center">
								<div className="spinner-border text-primary" role="status">
									<span className="sr-only">{t('Loading...')}</span>
								</div>
							</div>
						) : null}
					</>
				) : (
					<p className="text-danger">{t('Check-out date must be after check-in date.')}</p>
				)}
			</div>
		</div>
	)
}

export default BookingSummary
