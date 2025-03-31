import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import "./TravelList.css";

function TravelList() {
    const [travels, setTravels] = useState(travelPlansData);

    const handleDelete = (id) => {
        setTravels(currentTravels => currentTravels.filter(travel => travel.id !== id));
    };

    return(
        <div className="travel-list">
            <h1>Travel Plans</h1>
            <ul>
                {travels.map((travel) => (
                    <li key={travel.id}>
                        <button 
                            className="delete-btn"
                            onClick={() => handleDelete(travel.id)}
                        >
                            ×
                        </button>
                        <img 
                            src={travel.image} 
                            alt={travel.destination}
                            className="travel-image"
                        />
                        <div className="travel-info">
                            <h2 className="destination">
                                {travel.destination} <span className="days">({travel.days} Days)</span>
                            </h2>
                            <p className="description">{travel.description}</p>
                            <div className="labels">
                                {travel.totalCost <= 350 && (
                                    <span className="label great-deal">Great Deal</span>
                                )}
                                {travel.totalCost >= 1500 && (
                                    <span className="label premium">Premium</span>
                                )}
                                {travel.allInclusive && (
                                    <span className="label all-inclusive">All Inclusive</span>
                                )}
                            </div>
                            <p className="price">Price: {travel.totalCost} €</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TravelList;