import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

const cardStyles = {
  border: "black 2px solid",
  padding: "10px",
  margin: "10px",
  display:"flex",
  flexDirection: "row"
}


const textStyles={
    color:"black",
    fontSize:"18px",
    display:"flex",
    flexDirection:"coloum"
}

const btnStyle={
    backgroundColor:"green"
}

const btnStyle2={
    backgroundColor:"blue"
}

function TravelList() {

 const [travelList, setTravelList] = useState(travelPlansData);
 const handleRemove = (index)=> {
    let clone = structuredClone(travelList)
    clone.splice(index,1)
    setTravelList(clone)
 }
 
 return (

    <div> 
        {travelList.map((eachTravel,index) => {
         return (
            <div style={cardStyles} key={index}>
          <img src={eachTravel.image} alt={eachTravel.destination} width="200px" height ="200px"/>
          <div>
           <h2 style={textStyles}>{eachTravel.destination}</h2> 
            <p style={textStyles}> {eachTravel.description} </p>
            <p style={textStyles}>Price: {eachTravel.totalCost} $ </p>
             <p>{eachTravel.totalCost <= 350 ? <button style={btnStyle}>Great Deal</button> : null }</p>
            <p>{eachTravel.totalCost >= 1500 ? <button style={btnStyle2}>Premium</button> : null }</p>
            <p>{eachTravel.allInclusive ? <button style={btnStyle2}>All Inclusive</button> : null }</p>

            <button onClick={()=> handleRemove(index)}> Delete</button>
           </div>

            </div>
         )
    }) }
    </div>

  ) 
}

export default TravelList;
