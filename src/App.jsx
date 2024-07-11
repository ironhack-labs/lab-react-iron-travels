import logo from "./assets/logo.png";
import "./App.css";
import TravelList from "./components/TravelList";
// import TravelPlanCard from "./components/TravelPlanCard";

function App() {
  const plan = {
    /* define your plan object here */
  };
  const handleDelete = () => {
    /* define your delete function here */
  };

  return (
    <>
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>
      <TravelList />
    </>
  );
}

export default App;
