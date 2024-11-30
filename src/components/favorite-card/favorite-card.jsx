import Panel from "../ui/panel/panel";

function FavoriteCard( { favorite }) {
    const { image, destination, days, totalCost } = favorite;
    return (
        <Panel className="d-flex flex-column align-items-center" style={{width: "25%"}}>
            <img className="img-fluid object-fit-cover" style={{height: "200px"}} src={image} alt={destination} />
            <h3 className="fs-5">{destination} ({days} Days)</h3>
            <span> {totalCost} €</span>
        </Panel>
    )
}

export default FavoriteCard;