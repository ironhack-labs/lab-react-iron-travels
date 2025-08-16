import { useState } from "react"
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {

    const [travelList, setTravelList] = useState(travelPlansData)

    const deleteDestination = (id) => {
        const updatedTravelList = travelList.filter(destination => destination.id !== id);
        setTravelList(updatedTravelList);
    }

  return (
    <div className= "travelList">
        <h2>Travel List</h2>
        {travelList.map(destination => {
            return (
                <div key={destination.id} className="travelCard" >
                        <img src={destination.image} width="250" className="image"/>
                        <div className="cardBody">
                            <h3>{destination.destination} ({destination.days} Days)</h3>
                                <div>{destination.allInclusive}</div>
                                <div>{destination.description}</div>
                                <div>Price: {destination.totalCost} €</div>
                                    <div className="labels">
                                        {destination.totalCost <= 350 ? <div className="greatDeal">Great Deal</div> : "" || destination.totalCost >= 1500 ? <div className="premDeal">Premium</div> : ""} 
                                        {destination.allInclusive ? <div className="allInclusive">All Inclusive</div> : ""}
                                    </div>
                                    <button onClick={() => deleteDestination(destination.id)} className="delete-button">Delete</button>
                        </div>
                </div> 
            )
        })}
    </div>
  )
}

export default TravelList


 {/* <div>{destination.parts.map(part => {
                                    return (
                                        <div className="parts">
                                            <span>{part.name}</span>
                                            <span>{part.description}</span>
                                            <span>Price: {part.cost} €</span>
                                        </div>
                                    )
                                })}</div> */}