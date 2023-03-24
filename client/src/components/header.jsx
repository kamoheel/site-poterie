import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Header = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [isSubMenuExpanded, setIsSubMenuExpanded] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        //expiration du localStorage après 24h
        const hours = 24;
        const now = new Date().getTime();
        const setupTime = localStorage.getItem('setupTime');
        if (setupTime == null) {
          localStorage.setItem('setupTime', now)
        } else {
          if(now-setupTime > hours*60*60*1000) {
            localStorage.clear();
            localStorage.setItem('setupTime', now);
          }
        }
        console.log(localStorage.getItem("loggedIn"));
          if (!localStorage.getItem("loggedIn")) {
            setIsLoggedIn(false);
            return;
            } else {
            setIsLoggedIn(
              JSON.parse(localStorage.getItem("loggedIn"))
            );
            
            }
      }, []);

      const handleLogOut = () => {
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_API_URL}api/auth/logout`,
            withCredentials: true,
          })
            .then((res) => {
              localStorage.clear();
              window.location = '/actus-atc';
            })
            .catch((err) => {
              console.log(err);
            });
        };
        
    return ( 
        <header>
        <div className="allcaps title">Argilement - Atelier de céramique</div>
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
                    //onMouseOut={() => {setIsSubMenuExpanded(!isSubMenuExpanded)}}
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
                <li>
                {isLoggedIn ? 
                    (
                    <Link
                    onClick={() => handleLogOut()}
                    >
                        Déconnexion
                    </Link> 
                    ) : ( 
                    <NavLink 
                    to="/connexion"
                    className={({ isActive }) => isActive ? "active-link" : "inactive-link"}
                >
                    Connexion
                </NavLink> )
                }
                </li>
            </ul>
        </nav>
     </header>
     );
}
export default Header;