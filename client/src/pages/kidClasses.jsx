import Classes from "../components/classes"
import { KidsTeensPrices } from "../components/kidsPrices"

const KidClasses = () => {
    const hoursMarieAnge = [
        ["mercredi", "13h45 - 15h15", "15h30 - 17h"],
    ]

    return ( <div>
        <Classes 
            publicConcerned="Enfants"
            hoursMarieAnge={hoursMarieAnge}
            prices = {KidsTeensPrices}
        />

    </div> );
}
 
export default KidClasses;