import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";
import "../App.css";

function TravelList() {
const [travelList, setTravelList] = useState(travelPlansData);

 const handleClickRemove = (id)=> {
    const filtered = travelList.filter(element => element.id !== id);
    setTravelList(filtered)
  }

const label = {
    
}

  return (
    <div>
      {travelList.map((element) => {
        let label;
        let display
        if(element.totalCost <= 350){
            label = "Great Deal"
        }else if(element.totalCost >= 1500){
            label = "Premium"
        }
        let allinclusive;
        if(element.allInclusive){
            allinclusive = "Allinclusive";
        }
        return (
          <div key={element.id} style={{border : "2px solid black", display:"flex",alignItems :"center", padding : "20px", margin : 20 , position : "relative"}}>
            <div>
                <img src={element.image} style={{width:300 , marginRight : "10px"}} alt="" />
            </div>
            <div style={{display :"flex", flexDirection :"column" , alignItems :"flex-start", }}>
                <h2 className="text-iron">{element.destination} , ({element.days} days)</h2>
            <p>{element.description}</p>
            <p>Price : {element.totalCost} €</p>
            <button onClick={()=> handleClickRemove(element.id)}>Erase</button>
            </div>
               {(allinclusive || label) && <div style={{border : "2px solid black ", padding : "10px", position : "absolute", top : 0 , left : 0, color : "white ", backgroundColor :"green", borderRadius : 20}}>{label} <br /> {allinclusive}</div>} 

          </div>
          
        );
      })}
    </div>
  );
}
export default TravelList;
