import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {
  const [listaTravels, setListaTravels] = useState(travelPlansData);
  const [favList, setFavList] = useState([])

  const handleDeleteTarjeta = (index) => {
    const clone = listaTravels.slice(0);
    clone.splice(index, 1);
    setListaTravels(clone);
  };

  const handleAddFav = (plan) => {
    const clone = favList.slice(0)
    clone.push(plan)
    setFavList(clone)
  }


  return (
    <div style={{display:"flex", justifyContent: "space-around"}}>
      <section>
        <ul className="contenido">
          {listaTravels.map((travel, index) => (
            <TravelPlanCard
              key={travel.id}
              index={index}
              plan={travel}
              handleDeleteTarjeta={handleDeleteTarjeta}
              handleAddFav={handleAddFav}
            />
          ))}
        </ul>
      </section>

      <section>
        <h2>Favoritos</h2>
          <ul>
        {favList.map((favorito) => {
          return (
            <li key={favorito.id}>
                <img style={{ width: "380px" }} src={favorito.image} alt="foto" />
                <div className="texto">
                  <h4>
                    {favorito.destination} ({favorito.days} days)
                  </h4>
                  <p style={{ fontStyle: "italic" }}>{favorito.description}</p>
                  <p>
                    <strong>Price:</strong> {favorito.totalCost} €
                  </p>
                </div>
              </li>
          )
        })}
        </ul>
      </section>
    </div>
  );
}

export default TravelList;
