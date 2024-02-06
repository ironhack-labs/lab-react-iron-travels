import { useState } from "react"
import travelPlansData from "./../../assets/travel-plans.json"
import "./TravelList.css"


const TravelList = () => {
    const [travelPlans, setTravelPlan] = useState(travelPlansData)

    function priceLabel(price) {
        if (price <= 350) {
            return <span className="great-deal">Great Deal</span>
        } else if (price >= 1500) {
            return <span className="premium">Premium</span>
        }
    }

    function showAllInclusive(data) {
        return data ? <span className="all-inclusive">All Inclusive</span> : null
    }

    const deleteTravel = travelToDelete => {
        const filteredTravels = travelPlans.filter(elm => {
            return elm.id != travelToDelete
        })

        setTravelPlan(filteredTravels)
    }


    return (
        <article>
            {travelPlans.map((plan) => (
                <div className="travelCard" key={plan.id}>
                    <img src={plan.image} alt="Photo" />
                    <ul>
                        <h3>{plan.destination} ({plan.days} days)</h3>

                        <li>{plan.description}</li>
                        <li><strong>Price:</strong> {plan.totalCost} €</li>
                        <div className="labels">
                            <p>{priceLabel(plan.totalCost)}</p>
                            <p>{showAllInclusive(plan.allInclusive)}</p>
                        </div>
                        <button className="btn-delete" onClick={() => deleteTravel(plan.id)}>Delete</button>
                    </ul>

                </div>
            ))
            }

        </article>
    )
}

export default TravelList