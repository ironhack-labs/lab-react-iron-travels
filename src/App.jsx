import logo from "./assets/logo.png";
import "./App.css";
import TravelList from "./components/TravelList";

function App() {
  return (
    <>
      <div className="flex justify-center mb-4">
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-3xl font-bold text-center">Iron Travels</h1>
      <h3 className="text-center">Tailored Travel Plans for Ironhackers</h3>

      <TravelList />
    </>
  );
}

export default App;
