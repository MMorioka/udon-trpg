import { SelectFromSixItems } from "./random";

const noodlesList: Array<string> = 
    [
        'chilled noodles', 
        'half-boiled noodles', 
        'commercially flour noodles', 
        'high-grade flour noodles', 
        'Himokawa noodles', 
        'instant noodles'
    ];

export const SelectedNoodles: string = SelectFromSixItems(noodlesList);