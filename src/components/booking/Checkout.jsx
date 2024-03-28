import React, { useEffect, useState } from "react"
import BookingForm from "../booking/BookingForm"
import {
	FaUtensils,
	FaWifi,
	FaTv,
	FaWineGlassAlt,
	FaParking,
	FaCar,
	FaTshirt
} from "react-icons/fa"

import { useParams } from "react-router-dom"
import { getRoomById } from "../../utils/ApiFunctions"
import RoomCarousel from "../common/RoomCarousel"
import { useTranslation } from 'react-i18next';

const Checkout = () => {
	
	const { t } = useTranslation();

	const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [roomInfo, setRoomInfo] = useState({
		photo: "",
		roomType: "",
		roomPrice: ""
	})

	const { roomId } = useParams()

	useEffect(() => {
		setTimeout(() => {
			getRoomById(roomId)
				.then((response) => {
					setRoomInfo(response)
					setIsLoading(false)
				})
				.catch((error) => {
					setError(error)
					setIsLoading(false)
				})
		}, 1000)
	}, [roomId])

	return (
		<div>
			<section className="container">
				<div className="row">
					<div className="col-md-4 mt-5 mb-5">
						{isLoading ? (
							<p>{t('Loading room information...')}</p>
						) : error ? (
							<p>{error}</p>
						) : (
							<div className="room-info">
								<img
									src={`data:image/png;base64,${roomInfo.photo}`}
									alt="Room photo"
									style={{ width: "100%", height: "200px" }}
								/>
								<table className="table table-bordered">
									<tbody>
										<tr>
											<th>{t('Room Type')}:</th>
											<td>{roomInfo.roomType}</td>
										</tr>
										<tr>
											<th>{t('Price per night')} :</th>
											<td>${roomInfo.roomPrice}</td>
										</tr>
										<tr>
											<th>{t('Room Service')}:</th>
											<td>
												<ul className="list-unstyled">
													<li>
														<FaWifi /> {t('Wifi')}
													</li>
													<li>
														<FaTv /> {t('Netfilx Premium')}
													</li>
													<li>
														<FaUtensils /> {t('Breakfast')}
													</li>
													<li>
														<FaWineGlassAlt /> {t('Mini bar refreshment')}
													</li>
													<li>
														<FaCar /> {t('Car Service')}
													</li>
													<li>
														<FaParking /> {t('Parking Space')}
													</li>
													<li>
														<FaTshirt /> {t('Laundry')}
													</li>
												</ul>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						)}
					</div>
					<div className="col-md-8">
						<BookingForm />
					</div>
				</div>
			</section>
			<div className="container">
				<RoomCarousel />
			</div>
		</div>
	)
}
export default Checkout
