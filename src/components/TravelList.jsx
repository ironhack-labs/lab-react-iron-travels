import { useState } from "react";
import travelData from "../assets/travel-plans.json";

function TravelList() {

    const [travelCount, setTravelCount] = useState(travelData)

    // let destiArray = [...travelData];

    // function showTravel() {

    //     for (i = 0; i < destiArray.length; i++) {

    //         let showTravelList = destiArray[i]
    //     }
    //     setTravelCount(showTravelList)
    // }
    return (
        <div>
            {travelCount.map(travel => {

                const deleteTravel = travelId => {
                    const filteredTravels = travelCount.filter(travel => {
                        return travel.id !== travelId;
                    });

                    setTravelCount(filteredTravels);
                };


                return (
                    <div style={{ display: "flex", border: "solid" }} key={travel.id} className="TravelDestination">
                        <img style={{ justifyContent: "left", width: "25%", height: "25%" }} src={travel.image} />
                        <span style={{ textAlign: "left", marginLeft: "20px" }}>
                            <h3>{travel.destination} ({travel.days} days)</h3>
                            <p> {travel.description}</p>
                            <p><b>Price:</b> {travel.totalCost} €</p>
                            {travel.allInclusive && <p class="inclusive">All-Inclusive</p>}
                            {(travel.totalCost <= 350) && <p class="inclusive">Great Deal</p>}
                            {(travel.totalCost > 1500) && <p class="inclusive">Premium</p>}
                            <button onClick={() => deleteTravel(travel.id)} className="btn-delete"> Delete </button>
                        </span>
                    </div>
                );
            })}
        </div>
    );
};

export default TravelList;