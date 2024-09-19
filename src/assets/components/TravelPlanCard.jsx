 
import React from 'react'

const TravelPlanCard = ({plan, handleFav,handleDelete, index}) => {

  const {id, destination, image, days, allInclusive, totalCost, description, parts: {namePackage, descriptionPackage,costPackage}  } = plan

  
  return (

    <div key={id} className="travelContainer">
            <div className="imgContainer">
            <img src={image} alt="" />
            </div>
          
          <div className="infoContainer">
          <h3>{destination} ( {days} Days )</h3>
          <p>{description}</p>
          <p>Price : {totalCost} €</p>
          {totalCost <= 350 ? (<label htmlFor="" className="greatDeal">Great Deal</label>):(<></>)}
          {totalCost >= 1500 ? (<label htmlFor="" className="blueLab">Premium</label>):(<></>)}
          {allInclusive === true ? (<label htmlFor="" className="blueLab">All-included</label>):(<></>)}
          <button onClick={() => handleDelete(index)} className="delButton">Delete</button>
          <button onClick={()=> handleFav(index)}>♡</button>
          
          </div>
          
        </div>

  )
}

export default TravelPlanCard 