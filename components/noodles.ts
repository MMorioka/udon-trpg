import React from "react";
import { SelectFromSixItems } from "./random";

const noodlesList = 
    [
        'chilled noodles', 
        'half-boiled noodles', 
        'commercially flour noodles', 
        'high-grade flour noodles', 
        'Himokawa noodles', 
        'instant noodles'
    ];

export const SelectedNoodles = SelectFromSixItems(noodlesList);