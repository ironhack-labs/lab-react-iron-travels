import React from "react";
import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

function TravelList() {
  const [listaTravel, setListaTravel] = useState(travelPlansData);

  const handleDelete= (id)=>{
    const arrTravel= listaTravel.filter( eachElement => eachElement.id !== id)
    setListaTravel(arrTravel);
  }

  return (
    <ul className="card-travel">
      {listaTravel.map((eachTravel, index) => (
        <li key={eachTravel.id}>
          <img 
          src={eachTravel.image} 
          alt="imagenes destinos" 
          style={{width:"250px"}}
          />
          <h2>
            {eachTravel.destination} ({eachTravel.days} days)
          </h2>
          <h5> {eachTravel.description}</h5>
          <h5 className="chollo"> Price: {eachTravel.totalCost}</h5>
          {eachTravel.totalCost <= 350 ? (<p style={{color:"green"}}>Great Deal!</p>) 
          : (<p style={{color:"gold"}}>Premium</p> )}
          <button onClick={()=>handleDelete(eachTravel.id)}> Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TravelList;
