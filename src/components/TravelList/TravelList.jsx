import { useState } from 'react';
import TravelPlanCard from "../TravelPlanCard/TravelPlanCard";
import travelPlansData from "./../../assets/travel-plans.json";

function TravelList() {

    const [cards, setCards] = useState(travelPlansData)

    function deleteCard(cardId) {
        const filteredCards = cards.filter(eachCard => eachCard.id != cardId)
        setCards(filteredCards)
    }

    return (

        <div className="travel-list">
            {
                cards.map(eachPlan => {
                    return <TravelPlanCard travelInfo={eachPlan} deleteCard={deleteCard} key={eachPlan.id} />
                })
            }
        </div>
    )

}

export default TravelList