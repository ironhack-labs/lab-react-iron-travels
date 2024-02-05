import logo from "./assets/logo.png";
import "./App.css";
import TravelList from './components/TravelList';
import travelPlansData from '/src/assets/travel-plans.json';

function App() {
  return (
    <>
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>

      {travelPlansData.map(destination => <TravelList trip={destination} key={destination.id} />)}
      
    </>
  );
}

export default App;
