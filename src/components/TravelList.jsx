import TravelPlanCard from "./TravelPlanCard";
function TravelList({ list, setList, fav, setFav }) {
  const handleDelete = (id) => {
    const filtered = list.filter((e) => e.id !== id);
    setList(filtered);
  };
  const handleFavorite = (id) => {
    const newFavorite = list.find((e) => e.id === id);
    setFav([newFavorite, ...fav]);
    const filtered = list.filter((e) => e.id !== id);
    setList(filtered);
  };
  return (
    <>
      <TravelPlanCard
        handleFavorite={handleFavorite}
        plan={list}
        handleDelete={handleDelete}
        fav={fav}
      />
    </>
  );
}
export default TravelList;
