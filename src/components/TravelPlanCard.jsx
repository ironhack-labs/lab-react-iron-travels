import React from "react";
import DeleteButton from "./DeleteButton";

function TravelPlanCard({ plan, handleAddToFavorites, handleDelete }) {

  
    const premium = {
      fontSize: "2.1",
      padding: "10px",
      backgroundColor: "blue",
      fontWeight: "strong",
      borderRadius: "10px",
      width: "40%",
      color: "white",
      
    }
  
    const deal = {
      padding: "10px",
      backgroundColor: "green",
      fontWeight: "strong",
      borderRadius: "10px",
      width: "40%",
      
    }
  
    return (
      <div className="travel-plan-card" >
        <div className="travel-plan-image">
          <img src={plan.image}  />
            <button className="favorite-button"
            onClick={() => handleAddToFavorites(plan)}
            > ❤️ </button>
         </div>
  
        <div className="travel-plan-info">
          <div className="info-header">
            <h2>
              {plan.destination} ({plan.days} Days)
            </h2>      

          </div>
          <p>{plan.description}</p>
          <p>
            <strong>Price:</strong> {plan.totalCost}
          </p>
          <div className="pricing">
            {plan.totalCost > 350 ? (
              <span style={premium}>Premium</span>
            ) : (
              <span style={deal}>Great Deal</span>
            )}
            {plan.allInclusive && <span style={premium}>All Inclusive</span>}
          </div>
        
        </div>     
            

      </div>
    )
  }
  
  export default TravelPlanCard