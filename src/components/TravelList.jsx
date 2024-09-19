import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {

  const [travelList, setTravelList] = useState(travelPlansData); 

  const [favList, setFavList] = useState([])

  // Se crea en el padre
  const handleDelete = (index) => {
    const updatedTravelList = travelList.slice(0)
    updatedTravelList.splice(index, 1)
    setTravelList(updatedTravelList)
  }

  const handleAddFav = (index) => {
    const selectedPlan = travelList[index];
    console.log(selectedPlan)
    setFavList([...favList, selectedPlan])
  }

  return (
    <>
    <div className="container">

      <section className="travel-list">
        
        {travelList.map((eachPlan, index) => (
          <TravelPlanCard key={index} plan={eachPlan} index={index} delete={() => handleDelete(index)} addFav={() => handleAddFav(index)}/>   
        ))}
      
      </section>

      <section id="fav">
        <h2>Favoritos</h2>
          {favList.length === 0 ? (
          <p>No hay favoritos aún</p>
          ) : (
          favList.map((favPlan, index) => (
            <div key={index} className="fav-list">
              <img src={favPlan.image} alt={favPlan.destination} className="travel-image" />
              <div>
                <h2>{favPlan.destination} ({favPlan.days} Days)</h2>
                <p>{favPlan.description}</p>
                <p><strong>Price:</strong> {favPlan.totalCost} €</p>
              </div>
            </div>
          ))
        )}
    </section>
    </div>

    </>
  );
}

export default TravelList