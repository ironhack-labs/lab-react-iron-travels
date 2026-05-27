import travelPlansData from '../assets/travel-plans.json';
import { useState } from 'react';
import { TravelPlanCard } from './TravelPlanCard';


export function TravelList() {


    return(

        <TravelPlanCard plan={travelPlansData}/>
    )


}