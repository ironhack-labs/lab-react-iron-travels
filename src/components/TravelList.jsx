import "./TravelList.css"
import travelPlansData from "../assets/travel-plans.json"
import { useState } from "react";
import TravelPlanCard from "./TravelPlanCard";


export default function TravelList() {

    const [travelToDisplay, setTravelToDisplay] = useState(travelPlansData);

    const deleteTravel = (travelId) => {
        console.log("je suis dedans")
        const newList = travelToDisplay.filter((elementObj) => {
            return elementObj.id !== travelId;
        });

        setTravelToDisplay(newList);
    }


    return(
        <div className="leftTravel">
            {travelToDisplay.map((element) => {
                return(
                    <div >
                        <div className="TravelList">
                            <img src={element.image} alt="Destination Image" />
                            <div className="TravelList-Info">
                                <h2>{element.destination} ({element.days} days)</h2>
                                <i>{element.description}</i>
                                <p><b>Price : </b>{element.totalCost}</p>
                                {element.totalCost >= 1500 && <p className="TravelList-Box-Blue">Premium</p>}
                                {element.allInclusive && <p className="TravelList-Box-Blue">All-inclusive</p>}
                                {element.totalCost <= 350 && <p className="TravelList-Box-Green">Great Deal</p>}
                                <div className="TravelList-Div-Btn-Delete">
                                    <button className="TravelList-Btn-Delete" onClick={() => deleteTravel(element.id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                        {element.parts.length && <TravelPlanCard plan={element.parts}></TravelPlanCard>}
                    </div>
                )
            })
        }
        </div>
    )
}