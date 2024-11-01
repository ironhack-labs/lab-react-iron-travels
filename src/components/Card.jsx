import { Label } from "./Label";
import { useState, useEffect } from "react";

export const Card = ({ item, data, setData, favs, setFavs }) => {
  const totalPrice = item.parts.reduce((acc, curr) => acc + curr.cost, 0);
  const [isFav, setIsFav] = useState(false);

  // // This useEffect runs every time 'favs' is updated
  // useEffect(() => {
  //   printFavs();
  // }, [favs]);

  // function printFavs() {
  //   if (favs.length) {
  //     console.log("Favs:");
  //     favs.forEach((e) => console.log(e.destination));
  //   }
  // }

  // console.log(data);
  function deleteItem(id) {
    // console.log("delete item");
    const filteredData = data.filter((e) => e.id !== id);
    setData(filteredData);
    const filteredFavs = favs.filter((e) => e.id !== id);
    setFavs(filteredFavs);
  }

  function handleFavClick(item, isFav) {
    const statusIsFav = !isFav;
    // toggle fav-status
    setIsFav(statusIsFav);

    const updatedData = data.map((e) => (e.id === item.id ? { ...e, isFav: statusIsFav } : e));
    setData(updatedData);

    // Update favs based on updated data
    const newFavs = updatedData.filter((e) => e.isFav);
    setFavs(newFavs);

    const favCard = document.getElementById(item.id);
    favCard.querySelector(".fav-btn").innerHTML = statusIsFav ? "❤️" : "♡";
    favCard.classList.toggle("bg-purple");
  }

  return (
    <div className="card" id={item.id}>
      <div className="col">
        <img src={item.image} />
      </div>
      <div className="col">
        <h2>
          {item.destination} ({item.days} Days)
        </h2>
        <div>
          <p>{item.description}</p>
          <p>
            <span className="bold">Price:</span> {totalPrice} €
          </p>
        </div>
        <div className="labels">
          {totalPrice <= 350 && <Label text="Great Deal" color="green" />}
          {totalPrice >= 1500 && <Label text="Premium" color="blue" />}
          {item.allInclusive && <Label text="All-inclusive" color="blue" />}
        </div>
        <button onClick={() => deleteItem(item.id)}>Delete</button>
        <button className="fav-btn" onClick={() => handleFavClick(item, isFav)}>
          ♡
        </button>
      </div>
    </div>
  );
};
