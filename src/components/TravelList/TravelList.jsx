import React, { useState } from "react"
import travelPlansData from './../../assets/travel-plans.json'
import './TravelList.css'

const TravelList = () => {
    const [travelPlans, setTravelPlans] = useState(travelPlansData);

    function labelByPrice(price) {

        if (price <= 350) {
            return <span className="greatDeal info">Great Deal</span>
        } else if (price >= 1500) {
            return <span className="info">Premium</span>
        }
    }

    function isAllInclusive(data) {

        if (data === true) {
            return <span className="info">All-Inclusive</span>
        }
    }

    const deleteTravel = (travelIdToDelete) => {
        const filteredTravels = travelPlans.filter(elm => {
            return elm.id != travelIdToDelete
        })
        setTravelPlans(filteredTravels)
    }

    return (
        <article className="TravelList">
            {travelPlans.map((plan) => (
                <div className="container" key={plan.id}>

                    <img src={plan.image} alt="imagen" />

                    <div className="info-container">
                        <h2>{plan.destination} {plan.days} days</h2>
                        <p className="plan-description">{plan.description}</p>
                        <p><strong>Price: </strong>{plan.totalCost} €</p>

                        <div className="aditional-info">
                            <h4>{labelByPrice(plan.totalCost)}</h4>
                            <h4>{isAllInclusive(plan.allInclusive)}</h4>
                        </div>

                        <button className="info btn-delete" onClick={() => deleteTravel(plan.id)}>Delete</button>

                    </div>
                </div>
            ))}
        </article>
    );
};

export default TravelList