import React, { useState } from 'react'
import TravelCard from '../TravelCard/TravelCard';
import travelPlansData from '/src/assets/travel-plans.json';

function TravelList() {
  const [travelList, setTravelList] = useState(travelPlansData);
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
  
  function mapTravelList () {
    const mappingList = travelList.map((plan, index) => {
      return (
        <figure key={ index }>
          <TravelCard plan={ plan } />
          <div className="layout-button">
            <button className="delete-button" onClick={() => filterTravelList(plan.id)}>Delete</button>
          </div>
        </figure>
      )
    });

    return mappingList;
  }

  function filterTravelList (travelId) {
    const filterList = travelList.filter(item => item.id !== travelId);
    return setTravelList(filterList);
  }

  return (
    <div className='travel-list'>
      { mapTravelList() }
    </div>
  )
}

export default TravelList