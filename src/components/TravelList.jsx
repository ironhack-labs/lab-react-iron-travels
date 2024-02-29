import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";
import { useState } from "react";


const TravelList = () => {

    const [travelData, setTravelData] = useState(travelPlansData)
    const [favorites, setFavorites] = useState([])

    const deleteTravelPlan = planId => {
        const filteredTravelPlan = travelData.filter(travelPlan => {
          return travelPlan.id !== planId;
        });
    
        setTravelData(filteredTravelPlan);
      };


    const addFavorites = (planId) => {
        const planToAdd = travelData.find(plan => plan.id === planId)

        setFavorites([...favorites, {...planToAdd, isFavorite: true}])

        const newTravelData = travelData.filter(plan => plan.id !== planId)
        setTravelData(newTravelData)
    }

    console.log(favorites)

    let travelCards = travelData.map(cardData => {
        return <TravelPlanCard key={cardData.id} plan={cardData} onDelete={deleteTravelPlan} onAddFavorites={addFavorites}/>
    })

    let favoriteCard = favorites.map(favorite => {
        return (
            <div key={favorite.id} className="fav-card">
                <img src={favorite.image} alt="" />
                <p>{favorite.destination}</p>
            </div>
        )
    })

  return (
    <div className="page-container">


        <div className="list-container">

            {travelCards}

        </div>

        <div className="fav-container">
            <h1>Favorited</h1>
            {favoriteCard}
        </div>

    </div>
  )
}

export default TravelList

