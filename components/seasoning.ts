import { SelectFromSixItems, GetRandomNumberFrom1ToMax } from "./random";

const seasingsList: Array<string> = 
    [
        'green onions', 
        'ginger', 
        'blend of seven spices (shichimi)', 
        'sesame', 
        'garlic', 
        'citrus'
    ];

export const SelectedSeasonings = () => {
    let toppingsStr = '';
    for (let i = 1; i <= GetRandomNumberFrom1ToMax(3); i++) {
        toppingsStr += SelectFromSixItems(seasingsList) + ', ';
    }
    return toppingsStr.slice(0, -2);
}