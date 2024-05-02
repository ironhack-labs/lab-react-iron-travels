import lugaresArr from "../data/travel-plans.json";
import React, { useState } from 'react'

function TravelList() {

  const [listaLugares , setListaLugares ] = useState(lugaresArr)
  
  const copiaLista = JSON.parse( JSON.stringify( listaLugares ) )
    
  const borrarLugar = (indexToDelete) => {
    copiaLista.splice(indexToDelete, 1)
    setListaLugares(copiaLista)

  }
  
  return (

    <div className="container">

      {listaLugares.map((eachPlace,index) => {
      return (
        
        <div key={eachPlace.id} className="main-card">
          <img src={eachPlace.image} alt={eachPlace.destination} style={{height:"150px",width:"250px"}} />

          <div className="card">
            <h2>{eachPlace.destination} {"("+eachPlace.days+" Days)"}</h2>
            <p className="desc">{eachPlace.description}</p>
            <p><span>Price: </span>{eachPlace.totalCost+" €"}</p>
            <div className="labels">
              {eachPlace.totalCost<=350?<label> Great Deal </label>:<label> Premium </label>}
              {eachPlace.allInclusive?<label> All-Inclusive </label>:""}
            </div>
            <button onClick={() => borrarLugar(index)}>Borrar</button>
          </div>
        </div>
      )
    })}

    </div>
    
  )
}

export default TravelList