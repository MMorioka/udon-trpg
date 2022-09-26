import { SelectFromSixItems } from "./random";

const howToBoilList: Array<string> = 
    [
        'steaming', 
        'wire', 
        'al dente', 
        'perfect', 
        'soft', 
        'half melted'
    ];

export const SelectedHowToBoil: string = SelectFromSixItems(howToBoilList);