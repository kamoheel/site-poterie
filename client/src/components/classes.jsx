const Classes = ({ publicConcerned, hoursChantal, hoursMarieAnge, hoursPepita, hoursAudrey, prices}) => {
    const displayHours = (hours, teacher) => {
        return (
            <div>
            <h2>Cours assurés par {teacher}</h2>
            {hours.map((setOfHours)=> {
                return (
                    <div key={setOfHours}>
                    <h3>{setOfHours[0]}</h3>
                    <p>{setOfHours[1]}</p>
                    {setOfHours[2] && <p>{setOfHours[2]}</p>}
                    </div>
                )
            })}
            </div>
            )
    }

    return ( 
        <section>
            <h1>Cours {publicConcerned}</h1>
            <div className="classes-container">
                <article className="hours">
                    {hoursMarieAnge && <div>{displayHours(hoursMarieAnge, "Marie-Ange")}</div>}
                    {hoursChantal &&<div>{displayHours(hoursChantal, "Chantal")}</div>}
                    {hoursPepita && <div>{displayHours(hoursPepita, "Pepita")}</div>}
                    {hoursAudrey && <div>{displayHours(hoursAudrey, "Audrey")}</div>}
                </article>
                <article className="prices">
                    <h2>Tarifs</h2>
                    <table>
                        <thead>
                            <tr>
                                <th colSpan="2">Tarifs 2022-2023</th>
                            </tr>
                        </thead>
                        <tbody>
                            {prices.map((price) => {
                                return (
                                    <tr>
                                        <td>{price.title}</td>
                                        {price.price && <td>{price.price}</td>}
                                        {price.priceFirstChild && <td>{price.priceFirstChild}</td>}
                                        {price.priceSecondChild && <td>{price.priceSecondChild}</td>}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    {publicConcerned === "Adultes" && (<div><h3>Réduction</h3><p>La mairie de Carbonne propose une Carte Loisirs Séniors qui donne droit à une prise en charge d'une partie de l'inscription, <a href="https://www.ville-carbonne.fr/La-Carte-Loisirs-Seniors.html" target="_blank" rel="noreferrer">cliquez ici pour plus d'information.</a></p></div>)}

                    {(publicConcerned === "Enfants" || publicConcerned === "Adolescents") && <div><h3>Réduction</h3><p>Il existe une Carte Loisirs Jeunes via la mairie de Carbonne qui donne droit, selon les ressources du foyer, à une réduction sur la cotisation, <a href="https://www.ville-carbonne.fr/Carte-Loisirs-Jeunes.html" target="_blank" rel="noreferrer">cliquez ici pour plus d'information</a></p></div>}
                </article>
            </div>
        </section>
     );
}
 
export default Classes;