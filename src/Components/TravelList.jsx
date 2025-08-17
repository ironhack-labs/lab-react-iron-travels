import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {
  const [travelPlansList, setTravelPlansList] = useState(travelPlansData);
  //conditional rendering en react, dentro del return, abrir una llave, poner una condicion booleana

  

  return (
    <div className="main-container">
      {travelPlansList.map((eachElement, index) => {
        return <TravelPlanCard key={eachElement.id} eachElement={eachElement} index={index} travelPlansList={travelPlansList} setTravelPlansList={setTravelPlansList}/>;
      })}
    </div>
  );
}

export default TravelList;

// Iteration 2 Update the TravelList component to display labels based on the cost (totalCost property) of each travel plan. Here’s how you should implement it:
// Travel plans that cost 350 or less should have a label Great Deal.
// Travel plans that cost 1500 or more should have the label Premium.
// Additionally, if the travel plan includes an all-inclusive package (allInclusive property), render a label All Inclusive in addition to the cost label.

// Iteration 3 | Removing Items - Delete Button
// Update the TravelList component and display a delete button on each list item. When the user clicks on the button, the corresponding travel plan should be removed from the list.
