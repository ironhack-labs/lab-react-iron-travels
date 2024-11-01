export const FavList = ({ favs }) => {
  return (
    <div id="favlist">
      <h2>Your Favourites:</h2>
      {favs.length > 0 ? (
        favs.map((e) => <h3 key={e.id}>{e.destination}</h3>)
      ) : (
        <p>No favourites yet.</p>
      )}
    </div>
  );
};
