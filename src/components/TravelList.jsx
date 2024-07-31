import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";
import "../App.css";

export default function TravelList() {
  const [list, setList] = useState(travelPlansData);

  const removeItem = (id) => setList(list.filter((item) => item.id !== id));

  return (
    <div className="travel">
      {list.map((item) => {
        return (
          <div className="travelList-div">
            <img src={item.image} style={{ width: 350, height: 250 }} />
            <div>
              <h2>
                {item.destination} ({item.days} days)
              </h2>
              <p style={{ fontStyle: "italic" }}>{item.description}</p>
              <p style={{ fontWeight: "bold" }}>
                Price:
                <span style={{ fontWeight: "normal" }}> {item.totalCost} </span>
                €
              </p>

              <div>
                <p>
                  {item.totalCost <= 350 && "Great Deal"}
                  {item.totalCost >= 1500 && "Premium"}
                  {item.allInclusive && <span> All-Inclusive</span>}
                </p>
              </div>
            </div>
            <button onClick={() => removeItem(item.id)}>🗑️</button>
          </div>
        );
        // fdfd
      })}
    </div>
  );
}
