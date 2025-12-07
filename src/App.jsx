import logo from "./assets/logo.png";
import "./App.css";
import { useState } from "react";
import travelPlansData from "./assets/travel-plans.json";
import TravelList from "./components/travel-list";
import TravelFav from "./components/travel-fav";

function App() {

  const [dataTravel, setDataTravel] = useState(travelPlansData);
  const [dataTravelFav, setDataTravelFav] = useState([]);

  function deleteTravel(id) {
    const dataFilterTravel = dataTravel.filter((travel) => travel.id !== id);
    setDataTravel([...dataFilterTravel]);
  }

  function favTravel (travel) {
    setDataTravelFav([...dataTravelFav, travel]);
  }

  return (
    <>
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>

      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col-8">
            <TravelList dataTravel={ dataTravel } deleteTravel={ deleteTravel } favTravel={ favTravel }/>
          </div>
          <div className="col-4">
            <h4 className="fw-bold">Favorites</h4>
            <TravelFav dataTravelFav={ dataTravelFav } />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
