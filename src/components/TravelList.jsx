import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

const allTravelPlansData = travelPlansData;

function TravelList() {
  const [currentTravelList, setCurrentTravelList] =
    useState(allTravelPlansData);

  const handleDeleteTravelList = (indextoRemove) => {
    let currentTravelListClone = JSON.parse(JSON.stringify(currentTravelList))

    currentTravelListClone.splice(indextoRemove, 1)
    
    setCurrentTravelList(currentTravelListClone);
  };

  const divCardStyle = {
    display: "flex",
    alignItems: "column",
    border: "1px solid black",
    margin: "20px"
}

    const imgStyle ={
        margin: "15px",
    }

    const datasStyle = {
        textAlign: "left"
    }

    const spanStyle = {
        fontWeight: "bold"
    }

    const labelStyle = {
        backgroundColor: "lightblue",
        color: "white",
        padding: "7px",
        borderRadius: "4px",
        marginRight: "10px"
    }

    const buttonStyle = {
        marginTop: "20px",
        marginBottom: "20px",
        backgroundColor: "grey",
    }

  return (
    <div>
      {currentTravelList.map((eachTravel, id) => {
        return (
          <div key={id} style={divCardStyle}>
            <div style={imgStyle}>
              <p>
                <img
                  src={eachTravel.image}
                  alt="image-destination"
                  width= "300px"
                  height= "180px"
                />
              </p>
            </div>
            <div style={datasStyle}>
              <h2>{eachTravel.destination} ({eachTravel.days} Days)</h2>
              <p>{eachTravel.description}</p>
              <p>{eachTravel.parts.name}</p>
              <p><span style={spanStyle}>Price:</span> {eachTravel.totalCost}€ </p>
                <div>
                    <label style={labelStyle}>{eachTravel.totalCost <= 350 && "Great Deal"}{eachTravel.totalCost >= 1500 && "Premium"}</label>
                    <label style={labelStyle}>{eachTravel.allInclusive === true ? "All-Inclusive" : null}</label>
                </div>
                <div>
                    <button style={buttonStyle} onClick={() => handleDeleteTravelList(id)}>Delete</button>
                </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TravelList;
