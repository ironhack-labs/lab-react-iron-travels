import React from 'react';
import travelPlansData from "../assets/travel-plans.json";
import {useState} from 'react';

const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState(travelPlansData)

  const handleDelete = (id) => {
 setTravelPlans(travelPlans.filter(currentPlan => currentPlan.id != id))
  }
    return(
      <ul>
        {travelPlans.map(currentPlan => (
          <li key={currentPlan.id} style= {{display: 'flex', border: '1px solid black', height: '300px',width:'1000px', padding: '1rem', paddingBottom: '1rem', gap:'10rem'}}>
            <div>
              <img src= {currentPlan.image} style={{width: '300px'}} />
            </div>
            <div>
              <h2>
                 {currentPlan.destination} ({currentPlan.days} Days)
              </h2>
              <p>
                 {currentPlan.description}
              </p>
              <p>
                 Price: {currentPlan.totalCost} $
              </p>
              {currentPlan.totalCost < 350 && <p style={{fontWeight: 'bolder', color:'blue', border: '1px solid blue'}}>Great Deal</p>}
              {currentPlan.totalCost > 1500 && <p style={{fontWeight: 'bolder', color:'red', border: '1px solid red'}}>Premium</p>}
              {currentPlan.allInclusive && <p style={{fontWeight: 'bolder', color:'green', border: '1px solid green'}}>All Inclusive</p>}
              <button type='button' onClick={() => handleDelete(currentPlan.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    )
  }

export default TravelList
