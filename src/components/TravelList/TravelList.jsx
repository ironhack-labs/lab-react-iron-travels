import React from "react";
import travelPlansData from "../../assets/travel-plans.json";
import { useState } from "react";
import { TravelPlanCard } from "../TravelPlanCard/TravelPlanCard";
import { Favorites } from "../Favorites/Favorites";
import "./styleTravelList.css";

export const TravelList = () => {
  const [data, setData] = useState(travelPlansData);
  const [favoritos, setFavoritos] = useState([]);
  const handleDelete = (index) => {
    let prov = data.slice(0);
    prov.splice(index, 1);
    setData(prov);
  };

  return (
    <>
      <div className="container">
        <div className="containerTravel">
          {data.map((plan, index) => {
            return (
              <div key={index}>
                <TravelPlanCard
                  plan={plan}
                  handleDelete={handleDelete}
                  index={index}
                  data={data}
                  setData={setData}
                  setFavoritos={setFavoritos}
                  favoritos={favoritos}
                />
              </div>
            );
          })}
        </div>
        <div className="containerFavList">
          {favoritos.length > 0 && <h3>Favorites</h3>}
          {favoritos?.map((elem, index) => {
            return (
              <div key={index}>
                <Favorites elem={elem} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
