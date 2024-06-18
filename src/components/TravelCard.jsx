import "./TravelCard.css";
import Label from "./Label";
import "./DeleteButton.css";
// import travelPlansData from "../assets/travel-plans.json";

// import DeleteButton from "./DeleteButton";

function TravelCard({ oneTravel, handleRemove }) {
  // function handleRemove(id) {
  //   const filteredArray = remove.filter((number) => number !== id);
  //   setRemove(filteredArray);
  // }
  return (
    <article className="travelCard">
      <div className="image">
        <img src={oneTravel.image} className="profile" alt="profile" />
      </div>
      <div className="text">
        <h3 className="details">
          <span className="destination">{oneTravel.destination}</span>
          <span> </span>
          <span className="days">({oneTravel.days} days)</span>
        </h3>
        <div className="subdetails">
          <p className="description">{oneTravel.description}</p>
          <p className="price">
            <span className="priceName">Price:</span> {oneTravel.totalCost} €
          </p>
          <div className="label">
            <span>
              {oneTravel.totalCost <= 350 && (
                <Label
                  color={"rgb(136,186,125)"}
                  label={"Great Deal"}
                  textColor={"black"}
                />
              )}
            </span>
            <span>
              {oneTravel.totalCost >= 1500 && (
                <Label color={"rgb(67,105,195)"} label={"Premium"} />
              )}
            </span>
            <span>
              {oneTravel.allInclusive && (
                <Label color={"rgb(67,105,195)"} label={"All Inclusive"} />
              )}
            </span>
          </div>
          <div>
            <button onClick={() => handleRemove(oneTravel.id)}>Delete</button>
            <button className="favButton">
              <img className="favButtonImg" src="src/assets/image.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default TravelCard;
