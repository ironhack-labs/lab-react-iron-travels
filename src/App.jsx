import logo from "./assets/logo.png";

import data from './assets/travel-plans.json'

import "./App.css";
import { useEffect } from 'react';
import TravelList from "./Components/TravelList";

function App() {

  useEffect(() => {
    console.log(data)
  }, [])

  return (
    <>
      <div>        
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>


      {
        data.map((travel) => {
          return (
            <TravelList
              key={travel.id}
              image={travel.image}
              destination={travel.destination}
              days={travel.days}
              description={travel.description}
              totalCost={travel.totalCost}
            />
          );
        })
        }
      
    </>
  );
}

export default App;
