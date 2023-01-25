import { NavLink } from 'react-router-dom';
import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import PotsBundle from "../assets/bundle.png";
import AdultPot from "../assets/adulte.png";
import TeenPot from "../assets/ados.png";
import KidPot from "../assets/enfants.png";
import Carousel from "../components/carousel";

const Home = () => {
    const [allPosts, setAllPosts] = useState([]);

    const fetchAllPosts = useCallback(
        () => {
            axios({
                method: "GET",
                url: `${process.env.REACT_APP_API_URL}api/posts`,
                withCredentials: true,
              })
                .then((res) => {
                  setAllPosts(res.data);
                })
                .catch((err) => {
                  console.log(err);
                }
                );
            }, [],
    );

    useEffect(()=>{
        fetchAllPosts();
    }, [fetchAllPosts])

    return ( 
    <section id="home">
        <h1>ATC - Cours de poterie à Carbonne</h1>
        <div id="home-presentation">
        <div className="home-text">
                <p>L'Atelier Terre de Carbonne propose le travail de l'argile sous toutes ses formes: <span className="strong">sculptures</span>, <span className="strong">poteries</span>, <span className="strong">modelages</span> et <span className="strong">céramiques</span>. < br/>
                Les cours sont destinés aux adultes, adolescents et enfants.</p>
                <h2>Les cours en détail:</h2>
                <div className='classes-links'>
                    <NavLink 
                        to="/cours-de-poterie-ceramique-adultes"
                        className={({ isActive }) => isActive ? "active-link" : "inactive-link"}
                    >
                        <img src={AdultPot} alt="Grand pot dessiné" />
                        <p>Cours Adultes</p>
                    </NavLink>
                    <NavLink 
                        to="/cours-de-poterie-ceramique-adolescents"
                        className={({ isActive }) => isActive ? "active-link" : "inactive-link"}
                    >
                        <img src={TeenPot} alt="Moyen pot dessiné" />
                        <p>Cours Ados</p>
                    </NavLink>
                    <NavLink 
                        to="/cours-de-poterie-ceramique-enfantss"
                        className={({ isActive }) => isActive ? "active-link" : "inactive-link"}
                    >
                        <img src={KidPot} alt="Petit pot dessiné" />
                        <p>Cours Enfants</p>
                    </NavLink>
                </div>
            </div>
            <img src={PotsBundle} alt="Groupe de pots dessinés" />
            
        </div>
        <div id="home-blog">
            <h2>Dernières actus de l'Atelier Terre</h2>
            <Carousel allPosts={allPosts} />
        </div>
    </section> 
    );
}
 
export default Home;