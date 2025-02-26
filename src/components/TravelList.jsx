import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [listItems, setListItems] = useState(travelPlansData);

  const handleDeleteListItem = (indexDelete)=>{
    let clone = listItems.slice(0);
    clone.splice(indexDelete, 1)

    setListItems(clone);
  }
  
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      {listItems.map((eachListItem, index) => {
        return(
        <div style={{display:"flex", flexDirection:"row", border:"1px solid black", width:"900px", marginBottom:"20px"}}>
            <div>
            <img src={eachListItem.image} width="450px" style={{margin:"30px"}}/>
            </div>
            <div style={{display:"flex", flexDirection:"column", marginLeft:"10px", alignItems:"flex-start" }}>
            <h2>{eachListItem.destination} ({eachListItem.days}days)</h2>
            <p>{eachListItem.description}</p>
            <p><strong>Price: </strong>{eachListItem.totalCost} €</p>
            <div style={{display:"flex", flexDirection:"row", alignItems:"flex-start" }}>
            {
                eachListItem.totalCost < 350 ?
                <label style={{backgroundColor:"lightgreen", padding:"3px", borderRadius:"5px", color:"black"}}><strong>Great Deal</strong></label>:false
            }
            {
                eachListItem.totalCost > 1500 ?
                <label style={{backgroundColor:"blue", padding:"3px", borderRadius:"5px", marginRight:"5px", color:"white"}}><strong>Premium</strong></label>:false
            }
            {
                eachListItem.allInclusive ?
                <label style={{backgroundColor:"blue", padding:"3px", borderRadius:"5px", marginRight:"5px", color:"white"}}><strong>All-Inclusive</strong></label>:false
            }
            </div>
            <div style={{marginTop:"10px"}}>
                <button style={{backgroundColor: "lightgrey", borderRadius:"5px"}} onClick={() => handleDeleteListItem(index)}>Delete</button>
            </div>
            </div>
        </div>
        )
      })}
    </div>
  );
}

export default TravelList;
