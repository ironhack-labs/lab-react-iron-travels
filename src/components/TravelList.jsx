import travelPlansData from "../assets/travel-plans.json";
import Travel from "./Travel";
import { useState } from "react";
import TravelPlanCard from "./TravelPlanCard";

export default function TravelList() {
  const [planArr, setPlanArr] = useState(travelPlansData);
  const [like, setLike] = useState(false);
  const favorite = [];
  const [favoriteArr, setFavoriteArr] = useState(favorite);
  const originArr = [...travelPlansData];

  function handleDelPlan(e) {
    console.log(e.target.dataset.id);
    console.log(originArr[e.target.dataset.id - 1].id);

    if (e.target.dataset.id == originArr[e.target.dataset.id - 1].id) {
      originArr.splice(e.target.dataset.id - 1, 1);

      setPlanArr(originArr);
    }
  }

  function handleFavorite(e) {
    console.log(111);
    console.log(like);
    console.log(favorite);

    setLike(true);
    console.log(e.target);

    const index = Number(e.target.dataset.num);
    console.log(index);
    console.log(originArr[index]);

    setFavoriteArr((favorite) =>
      favorite.includes(originArr[index])
        ? favorite
        : [originArr[index], ...favorite]
    );
  }

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <ul className="travel-list">
        {planArr.map((plan, index) => (
          <Travel
            key={plan["id"]}
            plan={plan}
            onHandleDel={handleDelPlan}
            onHandleFavorite={handleFavorite}
            index={index}
          />
        ))}
      </ul>
      <div className="favorite" style={{ textAlign: "center", width: "500px" }}>
        <h2> Favorites</h2>
        <ul style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {favorite &&
            favoriteArr.map((plan, index) => (
              <TravelPlanCard
                key={plan["id"]}
                plan={plan}
                like={like}
                index={index}
              />
            ))}
        </ul>
      </div>
    </div>
  );
}
