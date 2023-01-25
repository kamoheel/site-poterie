import Classes from "../components/classes"
import { KidsTeensPrices } from "../components/kidsPrices"

const TeenClasses = () => {
    const hoursAudrey = [
        ["vendredi", "18h - 19h30"],
    ]

    return ( <div>
        <Classes 
            publicConcerned="Adolescents"
            hoursAudrey={hoursAudrey}
            prices = {KidsTeensPrices}
        />

    </div> );
}
 
export default TeenClasses;