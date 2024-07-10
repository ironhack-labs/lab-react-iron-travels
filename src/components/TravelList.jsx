import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [lugares, setLugares] = useState(travelPlansData);

  const eliminar = (indexBorrar) => {
    const clone = JSON.parse(JSON.stringify(lugares));
    clone.splice(indexBorrar, 1);
    setLugares(clone);
  }
  return (
    <div>
      {lugares.map((eachLugar, index) => {
        return (
          <div className="travel-card"> 
          <img src={eachLugar.image} alt="" />
            <h3>
              {eachLugar.destination}{" "}
              <span>
                {"("}
                {eachLugar.days} Days
                {")"}
              </span>
            </h3>
            <p>{eachLugar.description}</p>
            <p>{eachLugar.totalCost} €</p>
            {eachLugar.totalCost < 350 ? ( <span className="labelG">Gran Oferta</span> ) : null} 
            {eachLugar.totalCost > 1500 ? ( <span className="label">Premium</span> ) : null}  
            {eachLugar.allInclusive ? ( <> <span className="label">Todo Incluido</span> </> ) : null}  
            <button onClick={() => eliminar(index)}>Eliminar</button>



          </div>
        );
      })}
    </div>
  );
}

export default TravelList;
