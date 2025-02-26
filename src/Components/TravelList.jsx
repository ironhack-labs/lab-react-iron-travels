import { useState } from "react"
import travelPlansData from "../assets/travel-plans.json"

function TravelList (){
const [packViajes, setPackViajes] = useState(travelPlansData)

    const handleRemoveFromTravels = (indiceDelete) => {
        const clone = packViajes.slice(0)

        console.log(clone)
        clone.splice(indiceDelete, 1)
        setPackViajes(clone)
        console.log(clone)

        
    }
    return (
        <>
        {packViajes.map((eachCountry, indice) => {
             
        
   


        return(
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-around", border: "solid", margin: 40}}>

                <div>
                    <img src={eachCountry.image} alt="" style={{width: "300px", height:"1200", margin: 50}} />
                </div>
                <div style={{marginBottom: 50 }}>
                    <h2>{eachCountry.destination}</h2>
                    <p>{eachCountry.description}</p>
                    <p> Price: {eachCountry.totalCost}</p>
                    
                    
                    

                    {eachCountry.totalCost >= 1500 ?  <p style={{backgroundColor: "blue", color: "white", width: 90, height:40,display: "flex", alignItems:"center", justifyContent:"space-around", WebkitBorderRadius: 20}}>Premium</p> : null} 

                    {eachCountry.allInclusive === true ? <p style={{backgroundColor: "blue", color: "white", width: 120, height:40,display: "flex", alignItems:"center", justifyContent:"space-around", WebkitBorderRadius: 20}}>All-Inclusive</p> : null}

                   {eachCountry.totalCost <= 350 ? <p style={{backgroundColor: "green", color: "black", width: 90, height:40,display: "flex", alignItems:"center", justifyContent:"space-around", WebkitBorderRadius: 20}}>Great deal</p> : null}

                   <button onClick={ () => handleRemoveFromTravels(indice)}>Delete</button>
                </div>

                


            </div>
        )

    })}
</>
)
    
}

export default TravelList