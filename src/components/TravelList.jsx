import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

export const TravelList = () => {
  const [dataSet, setDataSet] = useState(travelPlansData);

  const handleDeleteButton = (id) => {
    let filteredList = dataSet.filter((element) => {
      return element.id !== id;
    });
    setDataSet(filteredList);
  };

  return dataSet.map((data) => {
    return (
      <div key={data.id} className="travelCard">
        <img src={data.image} alt="picture of the city" />
        <div className="cardData">
          <div>
            <strong>
              {data.destination} (<span>{data.days} days)</span>
            </strong>
          </div>
          <div>{data.description}</div>
          <div>
            <strong>Price: </strong>
            {data.totalCost} €
          </div>
          <div>{data.totalCost <= 350 ? <p>GREAT DEAL</p> : <p></p>}</div>
          <div>{data.totalCost >= 1500 ? <p>PREMIUM</p> : <p></p>}</div>
          <div>
            <button
              onClick={() => {
                handleDeleteButton(data.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  });
};
