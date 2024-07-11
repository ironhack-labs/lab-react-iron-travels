import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [localizacion, cambiarLocalizacion] = useState(travelPlansData);

  function deleteBtn(index) {
    let clone = [...localizacion];
    clone.splice(index, 1);
    cambiarLocalizacion(clone);
  }

  return (
    <div>
      {localizacion.map((eachLocalizacion, index) => {
        const { image, destination, days, description, totalCost, parts } = eachLocalizacion;

        return (
          <div key={index}>
            <img src={image} alt="" className="img" />
            <h1>
              {destination} ({days} Days)
            </h1>
            <span>{description}</span>
            <p>Price: {totalCost}</p>
            {totalCost <= 350 ? <button>Great Deal</button> : null}
            {totalCost >= 1500 ? <button>Premium</button> : null}
            {parts[0].name === "All-Inclusive Package" ? (
              <button>All-inclusive</button>
            ) : null}
            <button onClick={() => deleteBtn(index)}>Delete</button>
            <button>♡</button>
          </div>
        );
      })}
    </div>
  );
}

export default TravelList;