import logo from "./assets/logo.png";

import data from './assets/travel-plans.json'

import "./App.css";
import { useState, useEffect } from 'react';
import TravelList from "./Components/TravelList";

function App() {

  const [travel, setTravel] = useState([])

  useEffect(() => {
    try {
    console.log(data)
      setTravel(data)
    } catch (error) {
      console.log(error)
    }
  }, [])

  const onHandleDelete = (id) => {
    console.log(id)
    const newTravel = travel.filter((travel) => travel.id !== id)
    setTravel(newTravel)
  }

  return (
    <>
      <div>        
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>


      {
        travel.map((travel) => {
          return (
            <TravelList
              key={travel.id}
              travel={travel}
              onHandleDelete={onHandleDelete}
            />
          );
        })
        }
      
    </>
  );
}

export default App;
