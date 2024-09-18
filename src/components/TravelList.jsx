import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {

  const styles = {
    display:"flex",
    padding:"20px",
    border: "solid 2px black",
    margin:"10px",
  }

  const [ travelList , setTravelList ] = useState(travelPlansData)

  let handleDeleteCard = (index) => {

    let clone = travelList.slice(0)
    clone.splice(index,1)
    setTravelList(clone)

  }

  return (
    <ul style={{margin:"15%", padding:"0px"}}>
      {travelList.map((card, index) => {
          return(
            <li style={styles}>
              <img src={card.image} alt="img" style={{height:"300px",width:"400px"}}/>
              <div>
                <h3>{card.destination}</h3>
                <p>{card.description}</p>
                <p>Price: {card.totalCost}</p>
                {card.totalCost <= 350 ?
                (<p style={{backgroundColor:"lightgreen", width:"100px"}}>Great Deal</p>) :
                card.totalCost > 1500 ?
                (<p style={{backgroundColor:"gold", color:"white", width:"100px"}}>Premium</p>) :
                (null)
                }
                {card.allInclusive ? 
                (<p style={{backgroundColor:"blue", color:"white", width:"100px"}}>All-Inclusive</p>) :
                (null)
                }
                <button onClick={() => handleDeleteCard(index)}>Delete</button>
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}

export default TravelList