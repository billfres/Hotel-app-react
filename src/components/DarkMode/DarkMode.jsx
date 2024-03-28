import React, { useEffect, useState } from "react";
import Sun from "./Sun.svg";
import Moon from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
    // Utilisation d'un état local pour suivre le thème actuel
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        // Mise à jour du thème du document lors du chargement du composant
        document.querySelector("body").setAttribute("data-theme", theme);
    }, [theme]);

    // Fonction pour basculer entre les thèmes
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme); // Sauvegarde du thème dans le localStorage
    };

    return (
        <>
            <div className="dark_mode">
                <input
                    className="dark_mode_input"
                    type="checkbox"
                    id="darkmode-toggle"
                    onChange={toggleTheme}
                    checked={theme === "dark"} // Utilisation de l'état local pour cocher/décocher la case
                />
                <label className="dark_mode_label" htmlFor="darkmode-toggle">
                    <img src={Sun} alt="Sun" className="img1" />
                    <img src={Moon} alt="Moon" className="img2" />
                </label>
            </div>
        </>
    );
};

export default DarkMode;
