import TravelPlansData from "../assets/travel-plans.json"
import { useState } from "react"



function TravelList() {
    const [TravelPlans, setTravelPlans] = useState(TravelPlansData)
    const deleteItem = (travelid) => {
    const newList = TravelPlans.filter(plans => plans.id !== travelid)
         setTravelPlans(newList)
    }
    
    return (
        <>
        {TravelPlans.map(e => {
            return (
                <div className="travel" key={e.id}>
                    <img src={e.image} />
                    <div>
                    <h1>{e.destination} ({e.days} days)</h1>
                    <p>{e.description}</p>
                    <p>Price: {e.totalCost} €</p>
                    <div className="info">
                    {e.totalCost < 350
                        ? <p>Great Deal</p>
                        : ""
                    }
                    {e.totalCost > 1500
                        ? <p>Premium</p>
                        : ""
                    }
                    {e.allInclusive
                        ? <p>All Included</p>
                        : ""
                    }
                    </div>
                    <button onClick={() => {deleteItem (e.id)}}>Delete</button>
                    
                    </div>
                </div>
            )
})}
        </>
    )
                                
}
export default TravelList;