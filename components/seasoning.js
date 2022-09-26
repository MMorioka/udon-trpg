import React from "react";
import { SelectFromSixItems, GetRandomNumberFrom1ToMax } from "./selectRandom";

const seasingsList = 
    [
        'green onions', 
        'ginger', 
        'blend of seven spices (shichimi)', 
        'sesame', 
        'garlic', 
        'citrus'
    ];

const selectedSeasonings = () => {
    let toppingsStr = '';
    for (let i = 1; i <= GetRandomNumberFrom1ToMax(3); i++) {
        toppingsStr += SelectFromSixItems(seasingsList) + ', ';
    }
    return toppingsStr.slice(0, -2);
}

export const Seasonings = () =>{
    return (
        <>
            <h3>Seasonings</h3>
            <p>{ selectedSeasonings() }</p>
        </>
    )
};