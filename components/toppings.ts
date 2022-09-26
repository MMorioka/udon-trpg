import { SelectFromSixSquareItems, GetRandomNumberFrom1ToMax } from "./random";

const toppingsList: Array<Array<String>> = 
    [
        [
            'pudding', 
            'shiitake mashroom', 
            'seaweeds', 
            'bean sprouts', 
            'soy source', 
            'spinach'
        ],
        [
            'butter', 
            'kakiage tempura', 
            'shrimp', 
            'natto', 
            'bamboo shoots (memma)', 
            'fish cake (kamaboko)'
        ],
        [
            'tofu', 
            'egg', 
            'beef', 
            'fried tofu (abura-age)', 
            'tempura scraps', 
            'curry'
        ],
        [
            'coriander (phakchi)', 
            'cod ovum (mentaiko)', 
            'tempra', 
            'oak leaf (kashiwa)', 
            'miso', 
            'cheese'
        ],
        [
            'fried fish cake (age-kamaboko)', 
            'roasted pork fillet (chā shāo)', 
            'grated radishes (daikon oroshi)', 
            'croquette', 
            'tomato', 
            'kelp yam (tororo-kombu)'
        ],
        [
            'mashroom (you can designate 1 type of mashroom)', 
            'meat (you can designate 1 type of meat)', 
            'seafood (you can designate 1 type of seafood)', 
            'vagetable (you can designate 1 type of vagetable)', 
            'fruit (you can designate 1 type of fruit)', 
            'free (you can designate 1 type of topping that you like)'
        ],
    ]

export const SelectedToppings = () => {
    let toppingsStr = '';
    for (let i = 1; i <= GetRandomNumberFrom1ToMax(3); i++) {
        toppingsStr += SelectFromSixSquareItems(toppingsList) + ', ';
    }
    return toppingsStr.slice(0, -2);
}