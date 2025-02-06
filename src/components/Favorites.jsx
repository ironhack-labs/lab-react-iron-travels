export default function Favorites({itemFavorite}){
   
  return (
    <div key={itemFavorite.id}>
      <img src={itemFavorite.image} style={{ width: "500px" }} />
      <h2>
        {itemFavorite.destination} {itemFavorite.days} days
      </h2>
      
      <h3>Price: {itemFavorite.totalCost} €</h3>
      
    </div>
  );
}