

import travelPlansData from "../travel-plans.json"
import { useState } from "react";

function TravelList() {
    const [currentTravelPlansData, setCurrentTravelPlansData] = useState(travelPlansData)

    const handleRemoveTravelPlan = (indiceABorrar) => {
        let clonetravelPlansData = JSON.parse(JSON.stringify(currentTravelPlansData));
        clonetravelPlansData.splice(indiceABorrar, 1);
        setCurrentTravelPlansData(clonetravelPlansData)
    }

  return (
    <div>
    
        {currentTravelPlansData.map((eachObj, index) => {
            return (
                <div key={eachObj.id} className="tralvellist">
                    <hr />
                    <div>
                        <img src={eachObj.image} width={"300px"}/>
                    </div>
                    <div className="texto">
                       <h3>
                        {eachObj.destination}
                        </h3>
                        <p>{eachObj.description}</p>
                        <p><span>Price: </span>{eachObj.totalCost}</p>
                        <div>
                            <p><span>{eachObj.totalCost <= 350 ? "Gran oferta" : " "}</span></p>
                            <p><span>{eachObj.totalCost >= 1500 ? "Premium" : " "}</span></p>
                            <span>{eachObj.allInclusive === true ? "Todo Incluido" : " "}</span>
                        </div>

                        <button onClick={() => handleRemoveTravelPlan(index)}>Eliminar</button>
                        
 
                    </div>
                    
                    <hr />

                </div>
            )
        })}

    </div>
  )
}

export default TravelList