import TravelPlans from "../assets/travel-plans.json";
import { useState } from "react";


function TravelList() {
    // Initialize the use State in order to hide data.
    //const[deleteDestination, setDeleteDestination] = useState(0);

    // Initialize the use State in order to have data displayed
    const [travelPlans, setTravelPlans] = useState([]);
    // duplicate the original array...
    let travelList = [...TravelPlans];

    // Iterate over every object of the array in order to display each one of them.
    for (let i=0; i<travelList.length; i++) {

        // Create a variable to store the travelList elements.
       const travel = travelList[i];
    }

   
  
    function clickToDelete(travelId) {
        //const {travel, clickToDelete} = props;
        let filteredDestination = travelList.filter((travel) => travel.id !== travelId)
        setTravelPlans(filteredDestination);
        console.log("working");
         };
  
   
    return(
        <div>
            {travelList.map((travel)=>{
                return(
                    <div className="destination-container" key={travel.id}>
                        <div>
                        <img className="destination-image" src={travel.image} alt={travel.destination} />
                        </div>
                        <div className="destination-info">
                        <h1>{travel.destination} ({travel.days} Days)</h1>
                        <p style={{fontStyle: "italic"}}>{travel.description}</p>
                        <p><strong>Price:</strong> {travel.totalCost} <strong>€</strong></p>
                            {travel.totalCost <= 350 ? <p className="great"><strong>Great Deal</strong></p> : null }
                            {travel.totalCost >= 1500 ? <p><strong className="premium">Premium</strong></p> : null }
                            {travel.allInclusive === true ? <p className="all-inclusive"><strong>All Inclusive</strong></p> : null }

                            <button onClick={() => clickToDelete(travel.id)}>Delete</button> 
                        </div>
                        </div>
                )
            })}
        </div>
    );
}

export default TravelList;