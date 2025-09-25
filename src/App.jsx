import logo from "./assets/logo.png";
import "./App.css";
import Travelist from "./components/Travelist";

function App() {
  function removePlan(id) {
    const filteredPlans = plansState.filter((planCard) => {
      if (plan.id !== id) {
        return true;
      }
    });
  }

  return (
    <>
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>
      {/* RENDER YOUR LIST COMPONENT HERE */}

      <div className="TravelList">
        <Travelist />
      </div>
    </>
  );
}

export default App;
