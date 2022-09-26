import { SelectFromSixItems } from "./random";

const soupsList: Array<string> = 
    [
        'none', 
        'commercially noodle soup', 
        'noodle soup made from bonitos', 
        'noodle soup made from dried sardines', 
        'hot water', 
        'curry soup'
    ];

export const SelectedSoup: string = SelectFromSixItems(soupsList);