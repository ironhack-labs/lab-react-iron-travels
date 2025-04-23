import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";
import "../components/TravelList.css"

function TravelList() {
    const [travelPlans, setTravelPlans] = useState(travelPlansData)

    const deleteTravel = (travelsToDelete) => {
        const newTravelPlans = travelPlans.filter((travel) => {
            if (travel.id !== travelsToDelete) {
                return true
            }
            else {
                return false
            }

        })
        setTravelPlans(newTravelPlans);

    }


    return (
        <section>
            {travelPlans.map((travelObj) => {
                return (
                    <div key={travelObj.id} className="card">
                        <img src={travelObj.image} alt={travelObj.destination} className="card-image" />
                        <div className="card-info">
                            <h3>{travelObj.destination} ({travelObj.days} Days)</h3>
                            <p>{travelObj.description}</p>
                            <p><span><strong>Price:</strong></span> {travelObj.totalCost} €</p>
                            <div className="card-footer">
                                <div className="label">
                                    {travelObj.totalCost <= 350 && (
                                        <span className="great-deal">Great Deal</span>
                                    )}
                                    {travelObj.totalCost >= 1500 && (
                                        <span className="premium">Premium</span>
                                    )}
                                    {travelObj.allInclusive && (
                                        <span className="all-inclusive">All Inclusive</span>
                                    )}
                                </div>
                                <button className="delete-button" onClick={() => deleteTravel(travelObj.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </section>
    )


}

export default TravelList