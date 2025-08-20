import logo from '../assets/logo.png';

function Navbar() {
  return (
    <div>
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>
    </div>
  );
}

export default Navbar;
