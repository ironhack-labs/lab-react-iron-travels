import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard.jsx";

export default function TravelList() {
  const [data, setData] = useState(travelPlansData)
  const [favList, setFavList] = useState([])
 


  function handleDelete (id) {
    setData( () => {
      return data.filter( element => element.id !== id)
    })
  }

  function handleFav (item) {
    setFavList( [... new Set ([item, ...favList])] )
  }

  return (
    <div className="full-container">
      <div id="plans-column">
        {data.map ( (element, index) => {
          return(
          <>  
            <TravelPlanCard plan={element} index={index} handleDelete={handleDelete} handleFav={handleFav}/>
          </>
          )  
        })
        }    
      </div>
      <div id="favorites">
        <h2>Favorites</h2>
        {favList.map( (element, index) => {
          return (
            <div className="fav-box" key={index}>
              <img src={element.image} />
              <h4>{element.destination}.  {element.days} days</h4>
              <h5>Price: {element.totalCost} €</h5>
              
            </div>
          )
        })}
      </div>
   
    </div>

  )

}