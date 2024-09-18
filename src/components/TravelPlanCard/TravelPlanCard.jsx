import React, { useState } from "react";
import fav from "../../assets/favorito.png";
import "./styleTravelPlanCard.css";

export const TravelPlanCard = ({
  plan,
  handleDelete,
  index,
  data,
  setData,
  setFavoritos,
  favoritos,
}) => {
  const [iconFav, setIconFav] = useState(false);

  const handleFavorite = (index) => {
    setIconFav(!iconFav);
    let prov = data.slice(0);
    let prov2 = favoritos.slice(0);
    prov.splice(index, 1);
    setData(prov);
    prov2.push(plan);
    setFavoritos(prov2);
  };

  return (
    <>
      <div className="containerCard">
        <div className="containerImg">
          <img src={plan.image} alt="image" />
        </div>
        <div className="containerInfo">
          <h2>
            {plan.destination}({plan.days} Days)
          </h2>
          <p>{plan.description}</p>
          <p>Price: {plan.totalCost}</p>
          <div className="acces">
            {plan.totalCost <= 350 && <p>Great Deal</p>}
            {plan.totalCost >= 1500 && <p>Premiun</p>}
            {plan.allInclusive && <p>All-Inclusive</p>}
          </div>
          <div className="btnCard">
            <button onClick={() => handleDelete(index)}>Delete</button>
            <button onClick={() => handleFavorite(index)}>
              <img src={fav} alt="icon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
