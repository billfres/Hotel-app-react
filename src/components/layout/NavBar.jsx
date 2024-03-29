import React, { useContext, useState } from "react"
import { NavLink, Link } from "react-router-dom"
import Logout from "../auth/Logout"
import i18n from '../Translate/i18next';
import { useTranslation } from "react-i18next";/**/
import DarkMode from "../DarkMode/DarkMode";
import DarkMode2 from "../DarkMode/DarkMode2";



const NavBar = () => {
	const  [locale, setLocale] = useState(i18n.language);

	i18n.on('languageChanged', () => setLocale(i18n.language));


	

	const handleChangeLng = (event) => {
		i18n.changeLanguage(event.target.value);
		localStorage.setItem("lng", event.target.value);
	};

/*
*/

	const {t} = useTranslation();
	//console.log('Language key:', t('Language'));
	const [showAccount, setShowAccount] = useState(false)

	const handleAccountClick = () => {
		setShowAccount(!showAccount)
	}

	

	const isLoggedIn = localStorage.getItem("token")
	const userRole = localStorage.getItem("userRole")

	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary px-5 shadow mt-5 sticky-top navbar1">
			<div className="container-fluid">
				<Link to={"/"} className="navbar-brand">
					<span className="hotel-color">{t('HotelName')}</span>
				</Link>

				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarScroll"
					aria-controls="navbarScroll"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarScroll">
					<ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
						<li className="nav-item">
							<NavLink className="nav-link" aria-current="page" to={"/browse-all-rooms"}>
							{t('Browse all rooms')}
							</NavLink>
						</li>

						{isLoggedIn && userRole === "ROLE_ADMIN" && (
							<li className="nav-item">
								<NavLink className="nav-link" aria-current="page" to={"/admin"}>
								{t('Admin')}
								</NavLink>
							</li>
						)}
					</ul>

					<ul className="d-flex navbar-nav">
						<li className="nav-item">
							<NavLink className="nav-link" to={"/find-booking"}>
							{t('Find my booking')}
							</NavLink>
						</li>

						<li className="nav-item dropdown">
							<a
								className={`nav-link dropdown-toggle ${showAccount ? "show" : ""}`}
								href="#"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
								onClick={handleAccountClick}>
								{" "}
								{t('Account')}
							</a>

							<ul
								className={`dropdown-menu ${showAccount ? "show" : ""}`}
								aria-labelledby="navbarDropdown">
								{isLoggedIn ? (
									<Logout />
								) : (
									<li>
										<Link className="dropdown-item" to={"/login"}>
										{t('Login')}
										</Link>
									</li>
								)}
							</ul>
						</li>
					</ul>

					<ul className="d-flex navbar-nav">
						<li className="nav-item">
							<select name="" id="" className="nav-link text-lang" value={locale} onChange={handleChangeLng}>
								<option value="en"><i className="ti ti-world"></i>{t('Langue1')}</option>
								<option value="fr">{/*<ion-icon name="globe-outline"></ion-icon>*/}{t('Langue2')}</option>
							</select>
						</li>
					
					</ul>{/**/}
					


					{/*<ul className="d-flex navbar-nav">
						<li className="nav-item">
							<DarkMode />
								
								<label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
							
						</li>
					</ul>*/}
					<ul className="d-flex navbar-nav">
						<li className="nav-item">
						<DarkMode2 />
						</li>
					
					</ul>
				</div>
				{/*<DarkMode2 />*/}
			</div>
		</nav>
	)
}

export default NavBar
