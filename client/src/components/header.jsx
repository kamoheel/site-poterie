import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [isSubMenuExpanded, setIsSubMenuExpanded] = useState(false);
        
    return ( 
        <header>
        <div className="allcaps title">ATC - Atelier Terre de Carbonne</div>
        <nav>
            <button className="menu" onClick={() => {setIsNavExpanded(!isNavExpanded)}} aria-label="Menu Button">
                <FontAwesomeIcon icon={faBars} className="fa fa-menu" />
            </button>
            <ul className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
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
                    onMouseEnter={() => {setIsSubMenuExpanded(!isSubMenuExpanded)}}
                    // onMouseOut={() => {setIsSubMenuExpanded(!isSubMenuExpanded)}}
                    className="link"
                > 
                        Cours
                </button>
                        <ul className={isSubMenuExpanded ? "hover-classes-menu" : "hidden"}>
                            <li>
                            <NavLink 
                            to="/cours-de-poterie-ceramique-adultes" 
                            className={({ isActive }) => isActive ? "active-link" : "inactive-link"}
                            >
                                Adultes
                            </NavLink>
                            </li>
                            <li>
                            <NavLink 
                            to="/cours-de-poterie-ceramique-adolescents" 
                            className={({ isActive }) => isActive ? "active-link" : "inactive-link"}
                            >
                                Ados
                            </NavLink>
                            </li>
                            <li>
                            <NavLink 
                            to="/cours-de-poterie-ceramique-enfants" 
                            className={({ isActive }) => isActive ? "active-link" : "inactive-link"}
                            >
                                Enfants
                            </NavLink>
                            </li>
                        </ul>
                </li>
                <li>
                <NavLink 
                    to="/actus-atc"
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
        </nav>
     </header>
     );
}
export default Header;