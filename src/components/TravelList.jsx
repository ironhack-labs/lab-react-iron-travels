import travelPlansData from "../assets/travel-plans.json";
import {useState} from "react";

function TravelList() {

const [travelToDisplay, setTravelToDisplay] = useState(travelPlansData);

const deleteTravel = (travelID) => {
    const newArray = travelToDisplay.filter( (travelObj) => {
        return travelObj.id !== travelID;
    });

    setTravelToDisplay(newArray);
}

    return (

        <section className="TravelList">

            {travelPlansData.map((travelObj) => {

                return (
                    <div key={travelObj.id} className="card">
                        <img src={travelObj.image} />
                        <h3>{travelObj.destination} ({travelObj.days} Days)</h3>
                        <p><em>{travelObj.description}</em></p>
                        <p><strong>Price: </strong>{travelObj.totalCost}</p>

                        {travelObj.totalCost <= 350 && <button>Great Deal</button>}
                        {travelObj.totalCost >= 1500 && <button>Premium</button>}
                        {travelObj.allInclusive === true && <button>All Inclusive</button>}

                        <p>
                            <button onClick={() => {deleteTravel(travelObj.id)}}>Delete</button>
                        </p>

                    </div>
                )
            })}

        </section>
    )
}
export default TravelList;