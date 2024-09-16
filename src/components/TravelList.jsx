import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";


const TravelList = () => {

    
    const [travelData, setTravelData] = useState(travelPlansData);

    const deleteTravelPlan = planId => {
        const filteredTravelPlan = travelData.filter(travelPlan => {
          return travelPlan.id !== planId;
        });
    
        setTravelData(filteredTravelPlan);
      };

    let travelCards = travelData.map(cardData => {
        return (
            <div key={cardData.id} className="card-container">
                <img src={cardData.image} alt="img" />
                <div className="card-data-wrapper">
                    <h2>{cardData.destination} ({cardData.days} Days)</h2>
                    <p>{cardData.description}</p>
                    <p><strong>Price: €</strong> {cardData.totalCost}</p>
                    {cardData.totalCost <= 350 && <span className="great-deal">Great Deal</span>}
                    {cardData.totalCost >= 1500 && <span className="premium-deal">Premium</span>}
                    {cardData.allInclusive && <span className="all-inclusive">All Inclusive</span>}
                    <button onClick={() => deleteTravelPlan(cardData.id)} className="delete-button">Delete</button>
                </div>
            </div>
        )
    })

  return (

    <div className="list-container">

        {travelCards}

    </div>

  )
}

export default TravelList

