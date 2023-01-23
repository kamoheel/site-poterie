import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    const [isSubMenuExpanded, setIsSubMenuExpanded] = useState(false);
    return ( 
        <footer>
            <div id="footer-top">
            <ul className="footer-navigation-menu">
                <li>
                <NavLink 
                    to="/" 
                    className={({ isActive }) => isActive ? "active-link" : "inactive-link"}
                >
                    Accueil
                </NavLink>
                </li>
                <li className="hover-classes">
                <button  
                    onClick={() => {setIsSubMenuExpanded(!isSubMenuExpanded)}}
                    className="link"
                > 
                        Cours
                </button>
                        <ul className={isSubMenuExpanded ? "hover-classes-menu" : "hidden"}>
                            <li>
                            <NavLink 
                            to="/cours-adultes" 
                            className={({ isActive }) => isActive ? "active-link" : "inactive-link"}
                            >
                                Adultes
                            </NavLink>
                            </li>
                            <li>
                            <NavLink 
                            to="/cours-ados" 
                            className={({ isActive }) => isActive ? "active-link" : "inactive-link"}
                            >
                                Ados
                            </NavLink>
                            </li>
                            <li>
                            <NavLink 
                            to="/cours-enfants" 
                            className={({ isActive }) => isActive ? "active-link" : "inactive-link"}
                            >
                                Enfants
                            </NavLink>
                            </li>
                        </ul>
                </li>
                <li>
                <NavLink 
                    to="/actus"
                    className={({ isActive }) => isActive ? "active-link" : "inactive-link"}
                >
                    Actualités
                </NavLink>
                </li>
                <li>
                <NavLink 
                    to="/contact"
                    className={({ isActive }) => isActive ? "active-link" : "inactive-link"}
                >
                    Contact
                </NavLink>
                </li>
            </ul>
            </div>
        <div id="footer-middle">
            <h2 className="footer-title">Nous Contacter</h2>
            <ul className="contact">
            <li>
                <FontAwesomeIcon icon={faLocationDot} className="fa fa-location" />
                <p>
                                Atelier Terre <br />
                                31390 Carbonne 
                </p>
            </li>
            <div className="contact-divider"></div>
            <li>
                <FontAwesomeIcon icon={faEnvelope} className="fa fa-envelope" />
                <a href="mailto:atelier.terre.carbonne22@gmail.com">atelier.terre.carbonne22@gmail.com</a>
            </li>
            </ul>
      </div>
            <div id='footer-bottom'>  
                <p>Copyright © 2023 Atelier Terre de Carbonne | Tous droits réservés | <NavLink to="/mentions-legales"> Mentions légales</NavLink></p>
                <p>Site web créé et développé par <a href="https://www.camilleherpin.com" target="_blank" rel="noreferrer">Camille Herpin</a></p>    
            </div>
        </footer>
     );
}
 
export default Footer;