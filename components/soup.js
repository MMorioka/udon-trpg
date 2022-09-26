import React from "react";
import { SelectFromSixItems } from "./selectRandom";

const soupsList = 
    [
        'none', 
        'commercially noodle soup', 
        'noodle soup made from bonitos', 
        'noodle soup made from dried sardines', 
        'hot water', 
        'curry soup'
    ];

const selectedSoup = SelectFromSixItems(soupsList);

export const Soup = () =>{
    return (
        <>
            <h3>Soup</h3>
            <p>{ selectedSoup }</p>
        </>
    )
};