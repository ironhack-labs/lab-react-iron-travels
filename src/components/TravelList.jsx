import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

export default function TravelList() {
  const [items, setItems] = useState(travelPlansData);

  const deleteItem = (itemId) => {
    const filteredItems = items.filter((item) => {
      return item.id !== itemId;
    });
    setItems(filteredItems);
  };

  return (
    <div>
      {items.map((local) => {
        return (
          <div id="general-box" key={local.id}>
            <div>
              <img src={local.image} alt={local.destination} />
            </div>
            <div>
              <h3 id="text-content">
                {local.destination} ({local.days} days)
              </h3>
              <p>{local.description}</p>
              <p>
                <b>Price:</b> {local.totalCost}
              </p>
              <section>
                {local.totalCost <= 350 ? (
                  <label>GREAT DEAL</label>
                ) : (
                  <span></span>
                )}
                {local.totalCost > 1500 ? (
                  <label>Premium</label>
                ) : (
                  <span></span>
                )}
                {local.allInclusive && <label>All-Inclusive</label>}

                <button onClick={() => deleteItem(local.id)}>DELETE</button>
              </section>
            </div>
          </div>
        );
      })}
    </div>
  );
}
