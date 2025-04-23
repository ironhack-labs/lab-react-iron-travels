import TravelPlanCard from "./TravelPlanCard";

const TravelList = ({ tours, onDelete, onLikeToggle }) => {
  return (
    <div className="list">
      {tours.map((tour) => (
        <TravelPlanCard
          key={tour.id}
          plan={tour}
          onDelete={onDelete}
          onLikeToggle={onLikeToggle}
        />
      ))}
    </div>
  );
};

export default TravelList;
