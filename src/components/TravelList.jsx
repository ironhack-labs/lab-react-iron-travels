import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);


    const handleDelete = (id) =>{
        setTravelPlans((prevPlans) => prevPlans.filter(plan => plan.id !== id))
    }



  return (
    <div>
      <ul style={{ listStyleType: "none"}}>
        {travelPlans.map((plan) => {
let label = "";
if(plan.totalCost <= 350){
    label = "Great Deal!"
}else if(plan.totalCost>1500){

    label = "Premium!"
}

const labelAllInclusive = plan.allInclusive ? "All Inclusive!" : "";  //if true then all if not empty label


        
        
        
        
        
        
        
        
        
        
        return(
          <li key={plan.id} style={{ marginBottom: "20px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                border: "3px solid black", 
                padding: "10px", 
                borderRadius: "5px", 
              }}
            >
              <img
                src={plan.image}
                alt={plan.destination}
                style={{
                  width: "300px", 
                  height: "auto",  
                  marginRight: "20px",  
                }}
              />




              <div>
                <h3>{plan.destination} ({plan.days} Days)</h3>
                <p>{plan.description}</p>
                <p>Price: {plan.totalCost} €</p>

                {/* LABELS*/}
                <p>
                    {label && <span style={{ color: "green", fontWeight: "bold" }}>{label}</span>}
                    {labelAllInclusive && label && " | "}
                    {labelAllInclusive && <span style={{ color: "blue", fontWeight: "bold" }}>{labelAllInclusive}</span>}
                  </p>


                  <button onClick={()=> handleDelete(plan.id)} style={{backgroundColor: "darkgray"}}>Delete</button>

                  </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TravelList;
