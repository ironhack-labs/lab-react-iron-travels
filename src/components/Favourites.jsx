export default function Favourites ( { favourites }) {
    return (
      <>
        <aside>
          <h2 id="fav-title">Favourites</h2>
          {favourites.map((fav) => {
            return (
              <>
                <div className="fav-container" key={fav.id}>
                  <img
                    src={fav.image}
                    className="fav-img"
                    alt={fav.description}
                  />
                  <h3>{fav.destination}</h3>
                  <p>{fav.totalCost} €</p>
                </div>
              </>
            );
          })}
        </aside>
      </>
    );
}