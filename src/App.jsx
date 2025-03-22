import logo from './assets/logo.png';
import './App.css';
import travelPlansData from './assets/travel-plans.json';
import { useState } from 'react';
import TravelList from './components/TravelList';

function App() {
  const [travelState, setTravelState] = useState(travelPlansData);

  function handleDelete(theCityId) {
    const filteredTravelState = travelState.filter(
      (oneCity) => oneCity.id !== theCityId
    );
    console.log(theCityId);
    setTravelState(filteredTravelState);
  }
  return (
    <>
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>

      {/* RENDER YOUR LIST COMPONENT HERE */}
      {travelState.map((oneCity) => {
        return (
          <TravelList
            cityData={oneCity}
            key={oneCity.id}
            handleDelete={handleDelete}
          />
        );
      })}
    </>
  );
}

export default App;
