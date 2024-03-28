import React, { useEffect, useState } from "react";
import "./DarkMode2.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMoon,faSun } from '@fortawesome/free-solid-svg-icons'

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
/*
    useEffect(() => {
        const checkbox = document.getElementById("checkbox");
        checkbox.addEventListener("change", () => {
            document.body.classList.toggle("dark");
        });

        return () => {
            checkbox.removeEventListener("change", () => {
                document.body.classList.toggle("dark");
            });
        };
    }, []);*/

    return (
        <>
           <div className="dark_mode">
                {/* <input type="checkbox" class="checkbox" id="checkbox"
                  
                    onChange={toggleTheme}
                    checked={theme === "dark"}  /* */ /*>
                <label for="checkbox" class="checkbox-label" htmlFor="darkmode-toggle">
                <FontAwesomeIcon icon={faMoon} color="red" />
                    <i class="fas fa-moon"></i>
                    <i class="fas fa-sun"></i>
                    <FontAwesomeIcon icon={faSun} />
                    <span class="ball"></span>
                </label>
                <label htmlFor="checkbox">Toggle Dark Mode</label> */}

                <input type="checkbox" class="checkbox" id="checkbox" onChange={toggleTheme}
                    checked={theme === "dark"} />
                <label for="checkbox" class="checkbox-label">
                    <FontAwesomeIcon icon={faMoon} color="red" />
                    <i class="fas fa-moon"></i>
                    <i class="fas fa-sun"></i>
                    <FontAwesomeIcon icon={faSun} />
                    <span class="ball"></span>
                </label>
            </div>
        </>
    );
};

export default DarkMode;
