import React, { useContext } from "react"
import { AuthContext } from "./AuthProvider"
import { Link, useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next";

const Logout = () => {
	const { t } = useTranslation();

	const auth = useContext(AuthContext)
	const navigate = useNavigate()

	const handleLogout = () => {
		auth.handleLogout()
		navigate("/", { state: { message: " You have been logged out!" } })
	}

	return (
		<>
			<li>
				<Link className="dropdown-item" to={"/profile"}>
				{t('Profile')}
				</Link>
			</li>
			<li>
				<hr className="dropdown-divider" />
			</li>
			<button className="dropdown-item" onClick={handleLogout}>
			{t('Logout')}
			</button>
		</>
	)
}

export default Logout
