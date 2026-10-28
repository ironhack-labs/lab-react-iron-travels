
import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {


    const[travelList,settravelList]=useState(travelPlansData)
const handleDelete=(id)=>{

const updateList=travelList.filter(random =>random.id !== id

);

settravelList(updateList);

};
  
  return (
 
    <div>{travelList.map((travelData)=>(
        <div className="travelCard" key={travelData.id}>
           <img  className="travelImage"src={travelData.image}/> 

           <div className="travelDetail"> 
            <h3>{travelData.destination}</h3>
            <p>{travelData.description}</p>
            

     
   

<p>Price:{travelData.totalCost} €</p>



             {travelData.totalCost<=350 && <span className="greatDeal">Great Deal</span> }
                  
  {travelData.allInclusive && <span className="allInclusive">All Inclusive</span> }

 

 <div>

     <button className="delete"  onClick={()=>handleDelete(travelData.id)}>Delete</button>
 </div>

  </div>

       </div>

    

  ))}

  </div>

 
  )



}
export default TravelList