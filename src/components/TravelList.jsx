import { useState } from "react";
import destinosArr from "../assets/travel-plans.json";
import './TravelList.css'

function TravelList() {

    const [listaDestinos, setListaDestinos] = useState(destinosArr)
    const handleEliminarDestino = (index) => {
        const cloneState = [...listaDestinos]
        cloneState.splice(index, 1)
        setListaDestinos(cloneState)
    }

  return (
    <div id="contenedor">
      {listaDestinos.map((eachDestino, index) => {
        return (
          <div id="cartas">
            <p id="travel" key={index}>
              <img
                src={eachDestino.image}
                style={{ height: "150px", width: "200px" }}
              />
              {eachDestino.destination}({eachDestino.days} Days)
              {eachDestino.description}
              Price: {eachDestino.cost}€
              <span>
              {eachDestino.totalCost< 350 ? "Great Deal" : "Premium" }
              </span>
              <span>
              {eachDestino.parts.name === "All-Inclusive Package" && "All Inclusive"}
              </span>

              <button onClick={handleEliminarDestino}>Delete</button>
            </p>
          </div>
        );
      })}
    </div>
  );
}
export default TravelList;
