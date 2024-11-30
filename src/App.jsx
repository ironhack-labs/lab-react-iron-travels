import logo from "./assets/logo.png";
import TravelList from "./components/travel-list/travel-list";
function App() {
  return (
    <>
    <div className="text-center mb-5">
      <div>
          <img src={logo} className="logo" alt="App logo" />
        </div>
        <h1 className="text-iron">Iron Travels</h1>
        <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>
    </div>
      
      {/* RENDER YOUR LIST COMPONENT HERE */}
      <TravelList />
      
    </>
  );
}

export default App;
