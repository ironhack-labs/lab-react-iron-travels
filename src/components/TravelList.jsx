import AllTravelList from "../assets/travel-plans.json";
import { useState } from "react";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {
  const [travelListing, setTravelListing] = useState(AllTravelList);
  const [favorites, setFavorites] = useState([]);

  function addFavorite(travel){
    setFavorites([...favorites, travel])
  }

  function deleteTravel(id) {
    const filteredTravels = travelListing.filter(
      (travel) => travel.id !== id
    );

    setTravelListing(filteredTravels);
  }

  return (
       <div>
  <h2>Travel Plans</h2>

  {travelListing.map((travel) => {
    return (
      <TravelPlanCard 
        key={travel.id} 
        travel={travel} 
        deleteTravel={deleteTravel}
        addFavorite={addFavorite}
      />
    );
  })}

  <h2>Favorites</h2>

  {favorites.map((travel) => {
    return (
      <TravelPlanCard
        key={travel.id}
        travel={travel}
        deleteTravel={deleteTravel}
        addFavorite={addFavorite}
      />
    );
  })}

</div>
  );
}

export default TravelList;