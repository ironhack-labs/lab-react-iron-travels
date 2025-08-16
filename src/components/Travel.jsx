const labelStyle = {
  width: "110px",
  height: "35px",
  background: "green",
  fontWight: 600,
  padding: "2px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "8px",
};

export default function Travel({ plan, onHandleDel, onHandleFavorite, index }) {
  return (
    <li className="travel-plan">
      <div className="img-box">
        <img src={plan["image"]} />
      </div>

      <div className="travel-text">
        <h2>{plan["destination"] + "(" + plan["days"] + " days)"}</h2>
        <p className="travel-description">
          <i>{plan["description"]}</i>
        </p>
        <p className="travel-price">
          <b>Price:</b>
          <span> {plan["totalCost"]}€</span>
        </p>
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          {plan["totalCost"] <= 350 ? (
            <span style={labelStyle}>
              <b>Great Deal</b>
            </span>
          ) : (
            ""
          )}
          {plan["totalCost"] >= 1500 ? (
            <span style={{ ...labelStyle, color: "white", background: "blue" }}>
              Premium
            </span>
          ) : (
            ""
          )}
          {plan["allInclusive"] ? (
            <span style={{ ...labelStyle, color: "white", background: "blue" }}>
              All-Inclusive
            </span>
          ) : (
            ""
          )}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "80px",
          }}
        >
          <button
            className="del-btn"
            onClick={() => onHandleDel(event)}
            data-id={plan["id"]}
          >
            Delete
          </button>
          <button
            className="heart"
            data-num={index}
            style={{
              border: "none",
              background: "#aaa",
              width: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => onHandleFavorite(event)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="heart-icon"
              data-num={index}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
}
