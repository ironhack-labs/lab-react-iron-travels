import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {

    const [travels, setTravels] = useState(travelPlansData)

    const deleteTravel = (travelToDeleteId) => {

        const newList = travels.filter((travel) => {
            if (travel.id !== travelToDeleteId) {
                return true
            } else {
                return false
            }
        })

        setTravels(newList)
    }

    return (
        <div className="travelList">
            {travels.map((travel) =>
                <div key={travel.id} className="travels">

                    <div className="image">
                        <img src={travel.image} alt="image" />
                    </div>

                    <div className="info">
                        <h2>{travel.destination} ({travel.days} Days)</h2>
                        <p>{travel.description}</p>
                        <h3>Price: {travel.totalCost} €</h3>
                        <div className="tag">
                            {travel.totalCost < 350 && (
                                <div className="deal">Great Deal</div>
                            )}
                            {travel.totalCost > 1500 && (
                                <div className="premium">Premium</div>
                            )}
                            {travel.allInclusive && (
                                <div className="allInclusive">All-Inclusive</div>
                            )}
                        </div>
                        <p>
                            <button onClick={() => { deleteTravel(travel.id) }}>Delete</button>
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default TravelList
