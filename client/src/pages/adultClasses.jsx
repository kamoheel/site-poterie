import Classes from "../components/classes"
import { AdultPrices } from "../components/adultPrices"

const AdultClasses = () => {
    const hoursChantal = [
        ["lundi", "9h30 - 12h30", "13h30 - 16h30"],
        ["samedi", "10h - 13h"]
    ]
    const hoursMarieAnge = [
        ["mercredi", "9h30 - 12h30", "18h30 - 21h30"],
    ]

    const hoursPepita = [
        ["Un week end par mois", "4h le samedi", "6h le dimanche"]
    ]
    return ( 
        <div>
            <Classes 
                publicConcerned="Adultes"
                hoursChantal={hoursChantal}
                hoursMarieAnge={hoursMarieAnge}
                hoursPepita={hoursPepita}
                prices = {AdultPrices}
            />

        </div> );
}
 
export default AdultClasses;