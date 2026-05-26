import travelPlansData from '../assets/travel-plans.json';
import { useState } from "react"
import { useEffect } from 'react'

export default function TravelList(){
const [listItems , setListItems] = useState(travelPlansData)

/* function deleteItem (id) {

  useEffect(() => {
    setListItems(listItems.filter((item) => item.id !== id))
  },[id])
  
} */


const deleteItem = (id) => {
  setListItems(listItems.filter((item) => item.id !== id))
}

console.log(listItems)

return ( 
<>
<div className="card mx-1 mb-1" >
{listItems.map((item)=>{
  return (
  <div key={listItems.id} className="card mx-1 mb-1">
   <img src={item.image} alt={item.destination} className="mx-1 size-1"/>
   <div>
     <h2>{`${item.destination} (${item.days} Days)`}</h2>
     <p>{item.description}</p>
     <div>Price: €{item.totalCost.toFixed(2)}</div>
     { item.totalCost <= 350 && <div className="label">Great Deal</div>}
     { item.totalCost >= 1500 && <div className="label">Premium</div>}
     <br></br>
     {item.allInclusive && <div className="label-green">All Inclusive</div>}
     {<button onClick={() => deleteItem(item.id)}>Delete</button>}
   </div>
  </div>)
}) }
</div>
</>  
) 

}

