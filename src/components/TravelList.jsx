import travelPlansData from "../assets/travel-plans.json";
import React, { useState } from 'react'
console.log(travelPlansData)

function TravelList() {
  const [ travel, setTravel ] = useState(travelPlansData)

  const clone = travel.slice(0)

  const handleDeleteTravels =(index) => {
    clone.splice(index, 1)
    setTravel(clone)
  }

   

  return (
      <div>
      
     {clone.map((elem, index) => 
      <div key={index} className ="container"> 
        <img src={elem.image} alt="picture" />
       <div className ="textStyle">  
       <h3>{elem.destination} {`(${elem.days} days)`}</h3> 
       <p><i>{elem.description}</i></p>
       <p>{`Price: ${elem.totalCost}€`}</p>
       <button id ="delete-btn" onClick={() => handleDeleteTravels(index)}>Eliminar</button>  
       </div>
       <div className = "ofertas">
       <label>{elem.totalCost>= 1500 && "Premium"}</label>
       <label>{elem.totalCost<= 350 && "Gran oferta"}</label>
       <label>{elem.parts.some(elem => elem.name ==="All-Inclusive Package") && "Todo incluido" }</label>
       
       </div>
      </div>

      
    )}
    
    
 
    </div>
 )

}

export default TravelList