import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import './TravelList.css'

function TravelList() {

    const [travelPlans, setTravelPlans] = useState(travelPlansData);

    const deleteItem = (travelId) => {
        const newList = travelPlans.filter((e) => {
            return e.id !== travelId;

        });
        setTravelPlans(newList)
    };




    return (

        travelPlans.map((travel) => {
            return (
                <section key={travel.id}>
                    <div className="card">
                        <div>
                            <img src={travel.image} alt={travel.destination} />
                        </div>
                        <div>
                            <h3>{travel.destination} ({travel.days} Days)</h3>
                            <p>{travel.description}</p>
                            <p><b>Price:</b> {travel.totalCost} €</p>
                            <div>
                                {travel.totalCost <= 350 && <span className="deal">Great Deal</span>}
                                {travel.totalCost >= 1500 && <span className="premium">Premium</span>}
                                {travel.allInclusive === true && <span className="all-inclusive">All Inclusive</span>}
                            </div>
                            <div className="button">
                                <button onClick={() => deleteItem(travel.id)}>X</button>
                            </div>
                        </div>

                    </div>

                </section>
            );
        })

    )




}

export default TravelList