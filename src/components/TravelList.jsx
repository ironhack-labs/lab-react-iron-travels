import travelPlansData from "../assets/travel-plans.json"
import { useState } from "react";

function TravelList() {

   
    const [travelsToDisplay, setTravelsToDisplay] = useState(travelPlansData);
    const deleteTravel = (travelId) => {
        const newArray = travelsToDisplay.filter( travelObj => {
            return travelObj.id !== travelId
        })
        setTravelsToDisplay(newArray)
    }

    return (
        
        <section className="TravelList">

            {travelsToDisplay.map((travelObj) => {

                const isGreatDeal = travelObj.totalCost <= 350;
                const isPremium = travelObj.totalCost >= 1500;
                const isAllInclusive = travelObj.allInclusive === true;
            
                
                return (
                    <div key={travelObj.id} className="card">
                        <div className="cardImage">
                            <img src={travelObj.image}></img>
                        </div>
                        <div className="cardText">
                            <h3>{travelObj.destination}</h3>
                            <p>{travelObj.description}</p>
                            <p><b>Price:</b> {travelObj.totalCost}€</p>
                            {isGreatDeal && (
                                <p className="great-deal"><b>Great Deal</b></p>
                            )}
                             {isPremium && (
                                <p className="premium"><b>Premium</b></p>
                            )}
                             {isAllInclusive && (
                                <p className="all-inclusive"><b>All-inclusive</b></p>
                            )}

                            <p>
                                <button onClick = {() => {deleteTravel(travelObj.id)}}>Delete</button>
                            </p>
                        </div>
                    </div>
                )
            })}


        </section>
    )

}

export default TravelList;