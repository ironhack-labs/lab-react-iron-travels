import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

const TravelList = () => {
  const [travelList, setTravelList] = useState(travelPlansData);

  const deleteTravelCard = (cardId) => {
    const filteredTravelCards = travelList.filter(
      (travelCard) => travelCard.id !== cardId
    );
    setTravelList(filteredTravelCards);
  };

  return (
    <ul>
      {travelList.map((item) => {
        return (
          <li key={item.id}>
            <div className="flex-container">
              <div className="image-div">
                <img
                  className="image"
                  src={item.image}
                  alt={item.destination}
                />
              </div>

              <div className="content-div">
                <h3>
                  {item.destination} ({item.days} Days)
                </h3>

                <p>
                  <i> {item.description} </i>
                </p>

                <p>
                  <strong> Price </strong> {item.totalCost} <strong>€</strong>{" "}
                </p>

                {/* Premium Label  */}
                {item.totalCost > 1500 && (
                  <div className="premium"> Premium </div>
                )}
                {/* Great Deal Label */}
                {item.totalCost < 350 && (
                  <div className="great-deal"> Great Deal </div>
                )}
                {/* All Inclusive  */}
                {item.allInclusive && (
                  <div className="all-inc"> All-Inclusive </div>
                )}

                {/* Delete button  */}
                <button
                  className="delete-button"
                  onClick={() => deleteTravelCard(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TravelList;
