import { parseISO } from "date-fns"
import React, { useState, useEffect } from "react"
import DateSlider from "../common/DateSlider"
import { useTranslation } from "react-i18next";

const BookingsTable = ({ bookingInfo, handleBookingCancellation }) => {
	const { t } = useTranslation();

	const [filteredBookings, setFilteredBookings] = useState(bookingInfo)

	const filterBooknigs = (startDate, endDate) => {
		let filtered = bookingInfo
		if (startDate && endDate) {
			filtered = bookingInfo.filter((booking) => {
				const bookingStarDate = parseISO(booking.checkInDate)
				const bookingEndDate = parseISO(booking.checkOutDate)
				return (
					bookingStarDate >= startDate && bookingEndDate <= endDate && bookingEndDate > startDate
				)
			})
		}
		setFilteredBookings(filtered)
	}

	useEffect(() => {
		setFilteredBookings(bookingInfo)
	}, [bookingInfo])

	return (
		<section className="p-4 Cbooking" style={{"overflow-x": "auto"}}>
			<DateSlider onDateChange={filterBooknigs} onFilterChange={filterBooknigs} />
			<table className="table table-bordered table-hover shadow" style={{width: "100%" }}>
				<thead>
					<tr>
						<th>S/N</th>
						<th>{t('Booking ID')}</th>
						<th>{t('Room ID')}</th>
						<th>{t('Room Type')}</th>
						<th>{t('Check-In Date')}</th>
						<th>{t('Check-Out Date')}</th>
						<th>{t('Guest Name')}</th>
						<th>{t('Guest Email')}</th>
						<th>{t('Adults')}</th>
						<th>{t('Children')}</th>
						<th>{t('Total Guest')}</th>
						<th>{t('Confirmation Code')}</th>
						<th colSpan={2}>{t('Actions')}</th>
					</tr>
				</thead>
				<tbody className="text-center">
					{filteredBookings.map((booking, index) => (
						<tr key={booking.id}>
							<td>{index + 1}</td>
							<td>{booking.id}</td>
							<td>{booking.room.id}</td>
							<td>{booking.room.roomType}</td>
							<td>{booking.checkInDate}</td>
							<td>{booking.checkOutDate}</td>
							<td>{booking.guestName}</td>
							<td>{booking.guestEmail}</td>
							<td>{booking.numOfAdults}</td>
							<td>{booking.numOfChildren}</td>
							<td>{booking.totalNumOfGuests}</td>
							<td>{booking.bookingConfirmationCode}</td>
							<td>
								<button
									className="btn btn-danger btn-sm"
									onClick={() => handleBookingCancellation(booking.id)}>
									{t('Cancel')}
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			{filterBooknigs.length === 0 && <p> {t('No booking found for the selected dates')}</p>}
		</section>
	)
}

export default BookingsTable
