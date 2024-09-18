import travelPlansData from "../assets/travel-plans.json";
import React from "react";
import { useState } from "react";
import "../index.css";

function TravelList() {
  const [plans, setPlans] = useState(travelPlansData);
  let handleDeletePlan = (index) => {
    let clone = plans.slice(0);
    clone.splice(index, 1);
    setPlans(clone);
  };
  return (
    <div style={{ color: "black", gap: "10px" }} className="main">
      {plans.map((plan, index) => {
        return (
          <>
            <div
              className="plans-card"
              style={{
                margin: "20px",
                border: "2px solid black",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img
                style={{
                  height: "300px",
                  width: "400px",
                  marginLeft: "20px",
                  marginTop: "40px",
                  marginRight: "20px",
                  marginBottom: "40px",
                }}
                src={plan.image}
                alt="city image"
              />
              <div
                className="plan info"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                }}
              >
                <h3>
                  {plan.destination} <span>({plan.days} Days)</span>{" "}
                </h3>
                <p>{plan.description}</p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Price: </span>
                  {plan.totalCost} €
                </p>
                <div style={{display:"flex", gap:"10px"}}>

                {plan.totalCost <= 350 ? (
                  <p
                    style={{
                      backgroundColor: "lightgreen",
                      width: "100px",
                      height:"30px",
                      borderRadius: "5px",
                      textAlign: "center",
                      fontWeight:"bold"
                    }}
                  >
                    Great Deal
                  </p>
                ) : plan.totalCost > 1500 ? (
                  <p
                    style={{
                      backgroundColor: "blue",
                      color: "white",
                      width: "100px",
                      height:"30px",
                      borderRadius: "5px",
                      textAlign: "center",
                      fontWeight:"bold"
                    }}
                  >
                    Premium
                  </p>
                ) : null}{" "}
                {plan.allInclusive ? (
                  <p
                    style={{
                      backgroundColor: "blue",
                      color: "white",
                      width: "100px",
                      height:"30px",
                      borderRadius: "5px",
                      textAlign: "center",
                      fontWeight:"bold"
                    }}
                  >
                    All-Inclusive
                  </p>
                ) : null}
                </div>
                <button
                  style={{ width: "100px", backgroundColor: "gray" }}
                  onClick={() => handleDeletePlan(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default TravelList;
