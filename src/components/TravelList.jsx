import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
    // State
    const [travelsToDelete, setTravelToDelete] = useState(travelPlansData)
    console.log(travelsToDelete)
    // Events
    const handleDelete = (indexToDelete) => {
        console.log("borrando")
        const clone = JSON.parse(JSON.stringify(travelsToDelete))
        clone.splice(indexToDelete, 1)
        console.log(clone)
        setTravelToDelete(clone)
    }

    //styles
    const containerTravelsStyles = {
        display: "flex",
        padding: "16px",
        gap: "16px",
        justifyContent: "flex-start",
        border: "1px solid #000",
        width: "900px",
        marginBottom: "16px"
    }

    const infoTravelStyles = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start"
    }

    const greatDealTagStyle = {
        backgroundColor: "green",
        color: "white",
        padding: "4px 8px 4px 8px",
        borderRadius: "4px",
        width: "80px",
        textAlign: "center"
    }

    const premiumAInclusiveTagsStyle = {
        backgroundColor: "blue",
        color: "white",
        padding: "4px 8px 4px 8px",
        borderRadius: "4px",
        width: "110px",
        textAlign: "center"
    }

    const btnDeleteStyles = {
        backgroundColor: "gray",
        width: "120px",
        textAlign: "center",
        color: "white"
    }
  return (
    <div>
      {travelsToDelete.map((eachTravel, index) => {
        return (
            <div key={eachTravel.id} style={containerTravelsStyles}>
                <img src={eachTravel.image} alt={eachTravel.destination} width="300px" />
                <div style={infoTravelStyles}>
                    <h3> {eachTravel.destination} </h3>
                    <p> {eachTravel.description} </p>
                    <p> <b>Price: </b> {eachTravel.totalCost} € </p>
                    {eachTravel.totalCost <= 350 && <p style={greatDealTagStyle}> Great Deal </p>}
                    {eachTravel.totalCost >= 1500 && <p style={premiumAInclusiveTagsStyle}> Premium </p>}
                    {eachTravel.allInclusive === true && <p style={premiumAInclusiveTagsStyle}> All - inclusive </p>}

                    {/* botón delete */}
                    <button style={btnDeleteStyles} onClick={() => handleDelete(index)}> ❌  Delete </button>
                </div>
            </div>
        )
      })}
    </div>
  );
}

export default TravelList;
