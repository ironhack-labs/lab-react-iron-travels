const TravelRow = ({ TravelInfo }) => {
    return (
        <div className="travelrow">
            <p>
                ID: {TravelInfo.id}<br />
                Destination: {TravelInfo.destination}<br />
                Cost: {TravelInfo.cost}
            </p>
        </div>
    );
};

export default TravelRow;