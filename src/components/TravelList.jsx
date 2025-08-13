import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json"

function TravelList() {
    const [travelPlans, setTravelPlans] = useState(travelPlansData)
    
    const handleDeleteBtnClick = (travelId) => {
        //!Works but is not the best way
        // travelPlans.forEach((travel, index)=>{
        //     if(travel.id === travelId){
        //         const copy = structuredClone(travelPlans)
        //         copy.splice(index,1)
        //         setTravelPlans(copy)
        //     }
        // })
    
        //!Filter out the travel with the Id passed as param.
        setTravelPlans(travelPlans.filter((travel) => travel.id !== travelId) )
    
    }

  return (
    <div>
        {travelPlans.map(travel => {

            // Calcular categoría una sola vez
            let priceCategory = "";
            if (travel.totalCost >= 1500) {
            priceCategory = "Premium";
            } else if (travel.totalCost <= 350) {
            priceCategory = "Great Deal";
            }

            return(
                <div className="card-travel" key={travel.id}>
                    <img src={travel.image} alt="" />
                    <div className="card-text">
                        <p className="travel-destination">{travel.destination} ({travel.days} Days)</p>
                        <p className="travel-description">{travel.description}</p>
                        <p className="travel-price"><span>Price: </span>{travel.totalCost} €</p>
                        <div className="label-row">
                            <p
                                className={`label ${priceCategory.toLowerCase().replace(" ", "-")}`}
                            >
                                {priceCategory}
                            </p>
                            {travel.allInclusive && (
                                <p className="label">All-Inclusive</p>
                            )}
                        </div>
                        <button onClick={() => handleDeleteBtnClick(travel.id)}className="btn-delete">Delete</button>
                    </div>
                </div>
            )
        }) 

        }
    </div>
  )
}
export default TravelList
