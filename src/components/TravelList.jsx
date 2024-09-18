import React from "react";
import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react"



export default function TravelList() {

    const [ lista, setLista ] = useState(travelPlansData)

    const handleDelete = (indexABorrar) => {
        
    
        const clone = lista.slice(0)
        clone.splice(indexABorrar, 1)
    
        setLista(clone)
    } 

  return (
    <div className="contenedor-principal">
      {lista.map((eachFav, index) => {
        return (
          <div className="contenedor" key={index}>
            <div>
              <img src={eachFav.image} alt="imagen" />
            </div>
            <div>
              <div>
                <h3>
                  {eachFav.destination} ({eachFav.days} Days)
                </h3>
              </div>

              <div>
                <p>{eachFav.description}</p>
              </div>

              <div>
                <h4>Price: {eachFav.totalCost} €</h4>
              </div>
              <div className="etiquetas">
                {eachFav.allInclusive === true ? <p className="All"> All-Inclusive </p> : ""}
              
                {eachFav.totalCost <=350 ? <p className="deal"> Great Deal </p> : ""}
          
                {eachFav.totalCost >= 1500 ? <p className="All"> Premium </p> : ""}

              </div>
              <div className="boton">
              <button onClick={() => handleDelete(index)} style={{backgroundColor:"grey"}}>Delete</button>
              </div>
              
            </div>
          </div>
        );
      })}
    </div>
  );
}
