import travelPlansData from "./../../src/data/travel-plans.json";
import { useState } from "react"
import TravelCard from "./TravelCard";


const TravelList = () => {

    const [trips, setTrips] = useState(travelPlansData)

    return (

        < div >
            {
                trips.map(trip => {
                    return <TravelCard tripInfo={trip} key={trip.id} />

                })

            }

        </div >
    )

}

//const deleteProduct = productIdToDelete => {
//     const filteredProducts = products.filter(eachProduct => eachProduct.id != productIdToDelete)
//     setTrips(filteredProducts)
// }
export default TravelList

