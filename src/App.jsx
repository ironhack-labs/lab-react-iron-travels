import logo from "./assets/logo.png";
import "./App.css";

import { useState } from "react";
import travelPlansData from "./assets/travel-plans.json";

import TravelList from "./components/TravelList";
import FavList from "./components/FavList";

function App() {
  const [tours, setTours] = useState(
    travelPlansData.map((tour) => ({ ...tour, liked: false }))
  );

  const deleteTour = (tourId) => {
    const updateList = tours.filter((prev) => prev.id !== tourId);
    setTours(updateList);
  };

  const toggleLike = (id) => {
    const updatedTours = tours.map((tour) => {
      if (tour.id === id) {
        return { ...tour, liked: !tour.liked };
      } else {
        return tour;
      }
    });

    setTours(updatedTours);
  };

  return (
    <>
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>

      <div className="main">
        <TravelList
          tours={tours}
          onDelete={deleteTour}
          onLikeToggle={toggleLike}
        />
        <FavList favourites={tours.filter((tour) => tour.liked)} />
      </div>
    </>
  );
}

export default App;
