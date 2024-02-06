import travels from "../assets/travel-plans.json";
import React, { useState } from 'react';



function TravelList (){

    const [travelToDisplay, setTravelToDisplay] = useState(travels);

    const DealLabel = ({totalCost}) => {
        if (totalCost < 350){
           return <label>Great Deal !</label> 
        } else if (totalCost >= 1500) {
           return <label>Premium Deal !</label>
        } else {
            return null;
        }
    }

    const AllInclusive = ({allInclusive}) => {
        if (allInclusive===true) {
           return <label> All Inclusive </label>
        } else {
            return null;
        }
    };

    const removeTravel = (travelId) => {
            const newList = travelToDisplay.filter((travel) => {
                return travel.id !== travelId;
            });
            setTravelToDisplay(newList);
        }

    const handleRemoveTravel = (travelId) => {
        removeTravel(travelId);
    }


    return (
        <div className="travelDisplayed">
        {travelToDisplay.map( (travelDetails) => {
            return(
                <div key={travelDetails.id} className="travelX">
                <img src={travelDetails.image} className="travelImg"/>
                <h3> {travelDetails.destination} , {travelDetails.days} days </h3>
                <p> {travelDetails.description} </p>
                <p> Price : {travelDetails.totalCost} </p>
                < DealLabel totalCost={travelDetails.totalCost} />
                < AllInclusive allInclusive={travelDetails.allInclusive}/>
                <button onClick={() => {handleRemoveTravel(travelDetails.id)}}>Delete the travel</button>
                </div>
            )
        })
    }
</div>
    )

}

export default TravelList;