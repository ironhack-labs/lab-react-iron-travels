import { useState } from "react";
import CardItem from "./CardItem";
import travelPlansData from "../assets/travel-plans.json";

const TravelList = () => {
    
  const [travels,setTravels] = useState(travelPlansData);

  console.log(travels)
  return (
    <div>
     {travels.map((element) => {
        return (
          <CardItem apartment={element} key={element.id} setTravels={setTravels} allTravel={travels}/>  
        );
     })}
    </div>
  )
}

export default TravelList
