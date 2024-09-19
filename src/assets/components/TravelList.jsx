

import travelPlansData from "../data/travel-plans.json"
import { useState } from "react"
import TravelPlanCard from "./TravelPlanCard"



const TravelList = () => {

  const [travelListed, setTravelList] = useState(travelPlansData)

  const handleDelete = (indexDel)=>{
    const clone = travelListed.slice(0)
    clone.splice(indexDel,1)
    setTravelList(clone)
     
  }

  const [ favList, setFavList ] = useState([])

  const handleFav = (elem) => {
    const clone = favList.slice(0)
    clone.push(elem)
    setFavList(clone)

  }


  return (

<div id="mainSect">
    <section id="travelList">
      {
        travelListed.map((elem, index)=>(
          <TravelPlanCard 
          key= {index}
          plan = {elem} 
          handleDelete = {handleDelete}
          index={index}
          handleFav = {handleFav}
          />
        ))
      }

    </section>
    <section id="favsSection">
      <h1>Favorites</h1>
      { favList.map((eachFav, index) =>{
        

          <TravelPlanCard 
          key= {index}
          plan = {eachFav} 
          handleDelete = {handleDelete}
          index={index}
          handleFav = {handleFav}
          />
          
        
      })

      }

    </section>
    </div>
  )
}

export default TravelList