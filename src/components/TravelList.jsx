import { useState } from "react";
import travelPlansData from "/src/assets/travel-plans";

export default function TravelList() {
  const [travelElement, setTravelElement] = useState(travelPlansData);

  let deleteBtn = (elementId) => {
    let newList = travelElement.filter((elem) => {
      return elem.id !== elementId;
    });
    setTravelElement(newList);
  };

  return (
    <div>
      {travelElement.map((element) => (
        <div key={element.id}>
          <h3>{element.destination}</h3>
          <h3>({element.days} days)</h3>
          <p>{element.description}</p>
          <p>Price: {element.totalCost}</p>
          {element.totalCost <= 350 ? <div>Great Deal</div> : <div className="BlueLabel">Premium</div>}
          <button
            onClick={() => {
              deleteBtn(element.id);
            }}
          >
            Delete
          </button>
          <img src={element.image} alt={element.destination} />
        </div>
      ))}
    </div>
  );
}
