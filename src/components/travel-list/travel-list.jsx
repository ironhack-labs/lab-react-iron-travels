import { useState } from "react"
import travelPlansData from "../../assets/travel-plans.json";
import TravelPlanCard from "../travel-plan-card";
import "./travel-list.css"

function TravelList () {

    const [travelPlans, setTravelPlans] = useState(travelPlansData)
    
    const [favorites, setFavorites] = useState([])

    const handleDelete = (id) => {
        setTravelPlans(travelPlans.filter((plan) => plan.id !== id))
    }

    const handleFavorite = (id) => {
        setFavorites([...favorites, travelPlans.filter((plan) => plan.id === id)[0]])
    }


    return <div className="ironTravel">
        <ul>
            {travelPlans.map((plan) => <TravelPlanCard key={plan.id} plan={plan} handleDelete={handleDelete} handleFavorite={handleFavorite} />
            )}
        </ul>
        <div className="favorites">
            <h1> Favorites </h1>
            <ul>
                {favorites ? favorites.map((plan) => (
                    <div className="fav" key={crypto.randomUUID()}>
                        <img className="favImg" src={plan.image} />
                        <p className="favDestination"> {plan.destination} ({plan.days} Days) </p>
                        <p className="favCost"> {plan.totalCost}€ </p>
                    </div>
                )
            ) : null }
            </ul>
        </div>
    </div>
}


export default TravelList