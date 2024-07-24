import { useState } from "react";
import Travelplans from '../assets/travel-plans.json'
import './Travellist.css'


function TravelList() {
    return (
        <ul id="card-container">
            {
                Travelplans.map(({ image, destination, days, description, totalCost, allInclusive }) => {
                    return (
                        <li key={destination}>
                            <div id="card">
                                <img src={image} alt="" />
                                <div className="info-container">
                                    <h2 className="title-card">{destination} ({days})</h2>
                                    <h4>{description}</h4>
                                    <h4>Price: {totalCost}$</h4>
                                    <div className="button-container">
                                        {totalCost <= 350 && <button className="label-button great-deal">Great Deal</button>}
                                        {totalCost >= 1500 && <button className="label-button premium">Premium</button>}
                                        {allInclusive && <button className="label-button all-inclusive">All Inclusive</button>}
                                    <div className="delete-button-container">
                                    <button className="delete-button">Delete</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    );
                })
            }
        </ul>
    );
}
export default TravelList