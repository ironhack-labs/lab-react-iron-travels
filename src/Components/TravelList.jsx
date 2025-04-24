import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

function TravelList() {

  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const deleteButton = (deleteTravelId) => {
    const filteredTravel = travelPlans.filter((travelObject) => travelObject.id !== deleteTravelId);
    setTravelPlans(filteredTravel);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '100px' }}>
      {travelPlans.map((travelObject) => (
        <div key={travelObject.id} style={{
          border: '1px solid #ddd',
          borderRadius: '50px',
          padding: '15px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <div>
            <img src={travelObject.image} alt={travelObject.title} style={{ maxWidth: '50%', height: 'auto', borderRadius: '50px' }} />
            <h1>{travelObject.destination}</h1>
            <p>{travelObject.description}</p>
            <p>Price: ${travelObject.totalCost}</p>
            <p>Duration: {travelObject.days} days</p>
            <button onClick={() => deleteButton(travelObject.id)} style={{
              padding: '8px 15px',
              backgroundColor: '#ff4444',
              color: 'white',
              borderRadius: '4px',
              cursor: 'pointer',
              marginTop: '10px',
              marginBottom: '30px',
            }}>Delete</button>
            <br />
            {travelObject.totalCost <= 350 && (<span style={{ backgroundColor: 'green', fontWeight: 'bold', marginRight: '10px', borderRadius: '4px', padding: '8px 15px', marginTop: '10px' }}> Great Deal </span>)}
            {travelObject.totalCost <= 1500 && (<span style={{ backgroundColor: 'lightblue', fontWeight: 'bold', marginRight: '10px', borderRadius: '4px', padding: '8px 15px', marginTop: '10px' }}> Premium </span>)}
            {travelObject.allInclusive && (<span> All-Inclusive </span>)}
          </div>
        </div>
      ))}
    </div>
  );
}

export { TravelList };