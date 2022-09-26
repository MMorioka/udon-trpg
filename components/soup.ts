import React from "react";
import { SelectFromSixItems } from "./random";

const soupsList = 
    [
        'none', 
        'commercially noodle soup', 
        'noodle soup made from bonitos', 
        'noodle soup made from dried sardines', 
        'hot water', 
        'curry soup'
    ];

export const SelectedSoup = SelectFromSixItems(soupsList);