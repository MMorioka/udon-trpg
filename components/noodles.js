import React from "react";
import { SelectFromSixItems } from "./selectRandom";

const noodlesList = 
    [
        'chilled noodles', 
        'half-boiled noodles', 
        'commercially flour noodles', 
        'high-grade flour noodles', 
        'Himokawa noodles', 
        'instant noodles'
    ];

const selectedNoodles = SelectFromSixItems(noodlesList);

export const Noodles = () =>{
    return (
        <>
            <h3>Noodles</h3>
            <p>{ selectedNoodles }</p>
        </>
    )
};