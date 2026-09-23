import { useEffect, useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
    const [ travelList , setTravelList ] = useState(travelPlansData)

    const getLabel = (cost) => {
        if(cost <= 350) {
            return "Great Deal"
        } else if(cost >= 1500) {
            return "Premium"
        }
    }

    const hasLabel = (cost) => {
        return cost <= 350 || cost >= 1500
    }

    const handleDelete = (id) => {
        const newList = travelList.filter((item) => item.id !== id)
        setTravelList(newList)
    }

    useEffect((() => {
        setTravelList(travelPlansData)
    }), [])

  return (
    <div>
        <div className="travel-list">
            {travelList?.map((plan, index) => {
                return( <div className="travel-list-items" key={index}>
                    <img src={plan.image} alt={plan.destination} />
                    <div className="travel-list-item"> 
                    <h3> {plan.destination} ({plan.days} Days) </h3>
                    <p className="italic"> {plan.description} </p>
                    <span className="list-item-price">
                        <p className="bold"> Price: </p>
                        <p> {plan.totalCost}€ </p>
                    </span>
                    <div className="list-item-labels">
                        {hasLabel(plan.totalCost) && <p className="list-item-label"> {getLabel(plan.totalCost)}</p>}
                        {plan.allInclusive && <p className="list-item-label"> All-Inclusive </p>}
                    </div>
                    <button onClick={() => handleDelete(plan.id)}> Delete </button>
                    </div>
                </div>)
            })}

        </div>
    </div>
  )
}

export default TravelList
