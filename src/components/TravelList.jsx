import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react"


function TravelList() {

    const [viajeSeleccionado, setViajeSeleccionado] = useState(travelPlansData);

    ///let datosViajes = travelPlansData;

    
    const borrarViaje = (indiceBorrar) => {

        const clone = viajeSeleccionado.slice(0);
        clone.splice(indiceBorrar, 1)
        console.log(clone)
        setViajeSeleccionado(clone)
    }




  return (

    <div style={{display: "flex", flexDirection: "column", alignItems:"center"}}>
        {viajeSeleccionado.map((cadaViaje, indice) => {

           // console.log(cadaViaje.parts[0].cost)

            return (
                <div style= {{display: "flex", justifyContent: "start", margin: "15px 20px", borderStyle: "solid", padding: "20px", width: "50vW", alignContent: "center", borderWidth: "2px"}}>
                    <img width="400vW" src={cadaViaje.image} alt="foto" ></img>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "start", marginLeft: "10px"}}>
                        <h2>{cadaViaje.destination} ( {cadaViaje.days} days)</h2>
                        <p>{cadaViaje.description}</p>
                        <p>Price: {cadaViaje.totalCost}</p> 
                        { 
                        cadaViaje.totalCost <= 350 ?
                        <label>
                              <button style={{backgroundColor: "green", width: "8vW", color: "white", borderRadius: "10px", margin: "2px"}} >Great Deal</button>
                        </label> : null 
                        }
                        <div style={{display: "flex", flexDirection: "row"}}>
                            { 
                            cadaViaje.totalCost > 1500 ?
                            <label>
                                <button style={{backgroundColor: "blue", width: "8vW", color: "white", borderRadius: "10px", margin: "2px"}} >Premium</button>
                            </label> : null
                            }
                            {
                            cadaViaje.allInclusive === true ?
                            <label>
                                <button style={{backgroundColor: "blue", width: "8vW", color: "white", borderRadius: "10px", margin: "2px"}} >All Inclusive</button>
                            </label> : null
                            }
                        </div>
                        <button onClick={() => borrarViaje(indice)}   style={{backgroundColor: "grey", width: "8vW", color: "white", borderRadius: "10px", margin: "2px"}}>Delete</button>
                    </div>
                    

                </div>

            
            )

        })}

    </div>
    
  )
}

export default TravelList
