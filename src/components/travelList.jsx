import { useState } from "react"
import data from "../assets/travel-plans.json"
import TravelPlanCard from "./travelPlanCard"
import FavoriteCard from "./favoriteCard"

function TravelList() {

    const [travelList, setTravelList] = useState (
        data
    )
    const [favoritesList, setFavoriteList] = useState([])

    const handleFavoriteClick = (favoritePlan) => {
        setFavoriteList((previous) => {
            const newList = favoritesList.includes(favoritePlan) ? previous.filter(plan => plan.id !== favoritePlan.id) : [...previous, favoritePlan]
            console.log(favoritePlan)
            return newList
        })
    }

    const deleteTravelPlan = (removeId) => {
        setTravelList((previous) => {
            return previous.filter((travelPlan) => travelPlan.id !== removeId)
        })
    }

    return (
        <div style={{display:"flex", justifyContent:"space-around"}}>
            <div>
                {travelList.map((travel) => {
                    return(
                        <TravelPlanCard key={travel.id} plan={travel} onDelete={deleteTravelPlan}  onFavorite={handleFavoriteClick} />
                    )
                })}
            </div>
            {
                favoritesList.length !== 0 && (
                    <div>
                <h3>Favorites</h3>
                {favoritesList.map((travelPlan) => {
                    return (<FavoriteCard  key={travelPlan.id} plan={travelPlan} />)
                })}
            </div>
                )
            }
        </div>
        
        
    )

}

export default TravelList