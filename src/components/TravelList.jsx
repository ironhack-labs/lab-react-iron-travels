import { useState, useEffect } from "react";
import travelPlansData from "../assets/travel-plans.json";
import { Card } from "./Card";

export const TravelList = ({ favs, setFavs }) => {
  const [data, setData] = useState(travelPlansData);
  // console.log(data);

  return (
    <div className="travellist">
      {data.map((item) => {
        return (
          <Card
            key={item.id}
            item={item}
            data={data}
            setData={setData}
            favs={favs}
            setFavs={setFavs}
            // printFavs={printFavs}
          />
        );
      })}
    </div>
  );
};
