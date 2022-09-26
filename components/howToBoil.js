import React from "react";
import { SelectFromSixItems } from "./selectRandom";

const howToBoilList = 
    [
        'steaming', 
        'wire', 
        'al dente', 
        'perfect', 
        'soft', 
        'half melted'
    ];

const selectedHowToBoil = SelectFromSixItems(howToBoilList);

export const HowToBoil = () =>{
    return (
        <>
            <h3>HowToBoil</h3>
            <p>{ selectedHowToBoil }</p>
        </>
    )
};