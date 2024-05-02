import { useState } from "react"
import travelPlansData from "../assets/travel-plans.json";
import "./TravelList.css";

function TravelList() {
    const [travelPlans, setTravelPlans] = useState(travelPlansData);

    const deleteTravel = (travelId) => {
        const newList = travelPlans.filter(travel => travel.id !== travelId);
        setTravelPlans(newList);
    }

    return (
        <section className="TravelList">
            <div className="Container">
                {travelPlans.map((place) => {
                    return (
                        <div className="card" key={place.id}>

                            <img src={place.image}></img>

                            <div>
                                <h3>{place.destination} ({place.days} Days)</h3>

                                <p ID="description">{place.description}</p>

                                <p>Price: {place.totalCost} €</p>

                                {place.totalCost <= 350 && <label> Great Deal </label>}

                                {place.totalCost >= 1500 && <label> Premium </label>}

                                {place.allInclusive && <label> All Inclusive </label>}

                                <br />

                                <button onClick={() => {deleteTravel(place.id)}}>Delete</button>
                            </div>

                        </div>

                    )
                })}
            </div>
        </section>
    )
}

export default TravelList;

