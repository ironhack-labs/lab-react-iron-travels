export const DeleteButton = ({ thisTravelPlan, travelData, setTravelData }) => {
  const handleDelete = (tripId) => {
    console.log(tripId, "clicked");
    const filteredTrip = travelData.filter((trip) => {
      if (trip.id != tripId) {
        return true;
      }
    });
    setTravelData(filteredTrip);
  };

  return (
    <div className="delete-btn-container">
      <button
        className="delete-btn"
        onClick={() => {
          handleDelete(thisTravelPlan.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};
