import React, { useState } from 'react'
import travelPlansData from "../assets/travel-plans.json";

export default function TravelList() {
    const [travelElement, SettravelElement] = useState([])
    let lable;
  return (
    <div>
        {
            travelPlansData.map((eachElement,i) => {
                return (
                    <div key={i} style={{display : "flex"}}>
                        <img src={eachElement.image} style={{width : "400px"}} alt="" />
                       <div>
                            <p>{eachElement.destination}</p>
                            <p>{eachElement.description}</p>
                            <p>{eachElement.totalCost}</p>
                       </div>
                       <div>
                            {eachElement.totalCost < 350 ?"Great Deal" : "Premium"}
                       </div>
                    </div>
                    
                )
            })
        }
    </div>
  )
}
