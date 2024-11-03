import { useState } from "react";

const TravelPlanCard  = ({plan, travelPlans, setTravelPlan, setLikedPlan}) => {
  function deleteTravel(id){
    console.log('Delete Clicked');

    let deletedPlans = travelPlans.filter((singlePlan)=>{
      return singlePlan.id !== id;
    })
    setTravelPlan(deletedPlans);

    let likedPlans = deletedPlans.filter((singlePlan)=>{
      return singlePlan.liked;
    })
    setLikedPlan(likedPlans);
  }  

  function planLiked(id){
    console.log('Favourite Clicked');

    let idx = travelPlans.findIndex((singlePlan)=>{
      return singlePlan.id === id;
    })

    travelPlans[idx].liked = travelPlans[idx].liked ? !travelPlans[idx].liked : true;
    setTravelPlan([...travelPlans]);

    let likedPlans = travelPlans.filter((singlePlan)=>{
      return singlePlan.liked;
    })
    setLikedPlan(likedPlans);
  }

  function randomColor(){
    let colorArr = ["purple", "blue", "green", "yellow", "orange", "red"];
    let colorIdx = Math.floor(Math.random() * colorArr.length);

    return colorArr[colorIdx];
  }

  return (
    <div className="card">
        <img src={plan.image} alt="Destination Image" className="dest-image"/>
        
        <div className="dest-data">
          <h3>{plan.destination} ({plan.days} Days)</h3>
          <p id="travel-desc">{plan.description}</p>

          <div id="travel-price">
            <h4>Price: </h4>
            <p>{plan.totalCost} €</p>
          </div>

          <div id="travel-labels">
            {(plan.totalCost <= 350) &&
              <div className="travel-label t-green">
                <span>Great Deal</span>
              </div>
            }

            {(plan.totalCost >= 1500) && 
              <div className="travel-label t-blue">
                <span>Premium</span>
              </div>
            }
            
            {(plan.allInclusive) && 
              <div className="travel-label t-blue">
                <span>All-Inclusive</span>
              </div>
            }
          </div>

          <div className="action-buttons">
            <button className="delete-button" onClick={() =>{deleteTravel (plan.id)}}>Delete</button>
            <button className="like-button" onClick={() =>{planLiked (plan.id)}}
             style={{backgroundColor: plan.liked ? randomColor() : "grey"}}
            >♡</button>
          </div>
        </div>
    </div>
  )
}

export default TravelPlanCard 