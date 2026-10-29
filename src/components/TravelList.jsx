import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const handleRemovePlan = (index) => {
    const statePlans = [...travelPlans];
    statePlans.splice(index, 1);

    setTravelPlans(statePlans);
  };

  return (
    <>
      <main className="flex flex-col gap-5 mt-10">
        {travelPlans.map((travel, index) => {
          return (
            <article key={travel.id} className="flex border-1 p-2">
              <img src={travel.image} className="w-2/5 object-cover"></img>
              <div className="flex flex-col justify-between w-3/5 pl-2">
                <div>
                  <h4 className="text-xl font-bold mb-1">
                    {travel.destination} ({travel.days} Days)
                  </h4>
                  <p>{travel.description}</p>
                  <p className="mt-6">Price: {travel.totalCost} €</p>
                </div>
                <div className="flex justify-between w-full">
                  {travel.totalCost <= 350 || travel.totalCost >= 1500 ? (
                    <div className="flex gap-1">
                      {travel.totalCost <= 350 ? (
                        <div className="py-2 px-4 bg-emerald-400">
                          <p>Great Deal</p>
                        </div>
                      ) : (
                        <>
                          <div className="py-2 px-4 bg-blue-400">
                            <p>Premium</p>
                          </div>
                          {travel.allInclusive ? (
                            <div className="py-2 px-4 bg-blue-400">
                              <p>All-Inclusive</p>
                            </div>
                          ) : null}
                        </>
                      )}
                    </div>
                  ) : null}
                  <button
                    onClick={() => handleRemovePlan(index)}
                    className="py-2 px-4 bg-red-400 ml-auto cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </main>
    </>
  );
}

export default TravelList;
