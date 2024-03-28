import React from "react"
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next';

const Admin = () => {
	const { t } = useTranslation();
	return (
		<section className="container mt-5 mb-5">
			<h2>{t('Welcome to Adimin Panel')}</h2>
			<hr />
			<Link to={"/existing-rooms"}>{t('Manage Rooms')}</Link> <br />
			<Link to={"/existing-bookings"}>{t('Manage Bookings')}</Link>
		</section>
	)
}

export default Admin
