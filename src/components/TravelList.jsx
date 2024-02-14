import travelPlansData from "../data/travel-plans.json"
import { useState } from "react"
import React from 'react'

function TravelList() {
  const [currentPlans, setCurrentPlans] = useState(travelPlansData)

  const handleRemovePlans = (indiceBorrar) => {
    console.log("intentando eliminar", indiceBorrar)
    let plansStateClone = JSON.parse(JSON.stringify(currentPlans))

    plansStateClone.splice(indiceBorrar, 1)

    setCurrentPlans(plansStateClone)
  }

  return (
    <div>

      {travelPlansData.map((eachObj, index) => {

        let pricesCartel;
        if (eachObj.parts.cost <= 350) {
          pricesCartel = "Great Deal"
        } else if (eachObj.parts.cost >= 1500) {
          pricesCartel = "Premium"
        }



        return (
          <div key={index} id="container">
            <div>
              <img className="imagen-destino" src={eachObj.image} alt={eachObj.image} />
            </div>
            <div>
              <h3> {eachObj.destination} </h3>
              <p>{eachObj.description}</p>
              <p>Price: {eachObj.parts.cost}--{pricesCartel}</p>
              <button onClick={() => handleRemovePlans(index)}>Eliminar</button>
            </div>
          </div>
        )
      })}
    </div>

  )
}

export default TravelList