import {useState} from "react";

function TravelPlanCard({travel, clickToDelete}) {

    function clickToFavorite(travelId) {
        //const {travel, clickToDelete} = props;
        let filteredDestination = travelList.filter((travel) => travel.id !== travelId)
        setTravelPlans(filteredDestination);
        
         };

    return(
        <div>
            {travelList.map((travel)=>{
                return(
                    <div key={travel.id}>
                        <h1>{travel.destination} {travel.days}</h1>
                        <img src={travel.image} alt={travel.destination} />
                        <p>{travel.description}</p>
                        <p><strong>Price:</strong> {travel.totalCost} <strong>€</strong></p>
                        <div >
                            {travel.totalCost <= 350 ? <p><strong>Great Deal</strong></p> : null }
                            {travel.totalCost >= 1500 ? <p><strong>Premium</strong></p> : null }
                            {travel.allInclusive === true ? <p><strong>All Inclusive</strong></p> : null }
                        </div>
                        <div>
                             <button onClick={() => clickToDelete(travel.id)}>Delete</button>
                             <button>♡</button> 
                        </div>
                        <div>
                        <TravelPlanCard plan={travel} />

                        </div>
                    </div>
                )
            })}
        </div>
    );

}

export default TravelPlanCard;