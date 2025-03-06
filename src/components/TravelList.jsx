import { useState } from "react";
import TravelPlanCard from "./TravelPlanCard";

export default function TravelList({ state, setState }) {
  return <TravelPlanCard plan={state} setPlan={setState} />;
}
