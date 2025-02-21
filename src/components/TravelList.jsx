import travelPlans from '../assets/travel-plans.json';
import { useState } from 'react';
import './TravelList.css'

// Create a TravelList component that displays the list of all 
// the items coming from the file src/data/travel-plans.json.
//  Remember to import the json data in the component:

function TravelList() {
    const [travels, setTravels ] = useState(travelPlans);


    const handleDelete = (id) => {
        const filteredItems = travels.filter((item) => item.id !== id);
        setTravels(filteredItems);

    }

    const costLabel = (cost) => {
        if (cost <= 350) {
            return 'Great Deal';
        } else if (cost >= 1500) {
            return 'Premium';
        }
    }

    return (
      <div className="travel-list-div">
        {travels.map((travel, index) => (
          <div key={index} className="travel-list-details">
            <h2 className="travel-list-destination">
              {travel.destination} ({travel.days} days)
            </h2>
            <h3 className="travel-list-title">{travel.title}</h3>
            <p className="travel-list-description">{travel.description}</p>

            <div className="travel-labels">
              {costLabel(travel.totalCost) && (
                <span className="label cost-label">
                  {costLabel(travel.totalCost)}
                </span>
              )}

              {travel.allInclusive && (
                <span className="label all-inclusive-label">All Inclusive</span>
              )}
            </div>
            <img
              src={travel.image}
              alt={travel.title}
              className="travel-list-image"
            />
            <p>Total Cost: ${travel.totalCost}</p>
            <button onClick={() => handleDelete(travel.id)}>Delete</button>
          </div>
        ))}
      </div>
    );

}
export default TravelList;