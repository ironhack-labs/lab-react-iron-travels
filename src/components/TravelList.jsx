import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
    const [travelToDisplay, setTravelToDisplay] = useState(travelPlansData);
    const deleteTravel = (travelId) => {
        const newList = travelToDisplay.filter((travel) => {

            return travel.id !== travelId;

        })
        setTravelToDisplay(newList)
    }
    return (
        <div>
            {travelToDisplay.map((travelObj) => {
                return (
                    <div key={travelObj.id} className="card">
                        <img src={travelObj.image} alt={travelObj.destination} />

                        <div className="card-text">
                            <h3>{travelObj.destination} ({travelObj.days} Days)</h3>
                            <p>{travelObj.description}</p>
                            <h4>Price: {travelObj.totalCost} €</h4>

                            <div className="labels">
                                {travelObj.totalCost <= 350 && (
                                    <p className="label great-deal">Great Deal</p>
                                )}
                                {travelObj.totalCost >= 1500 && (
                                    <p className="label premium">Premium</p>
                                )}
                                {travelObj.allInclusive && (
                                    <p className="label inclusive">All-Inclusive</p>
                                )}
                                
                                 <button className="delte-btn" onClick={() => { deleteTravel(travelObj.id) }}>Delete</button>
                              
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default TravelList;
