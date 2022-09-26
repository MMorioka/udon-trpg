export const SelectFromSixItems = (sixItems) => {
    return (
        sixItems[Math.floor(Math.random() * 6)]
    );
};

export const SelectFromSixSquareItems = (sixSquareItems) => {
    return (
        sixSquareItems[Math.floor(Math.random() * 6)][Math.floor(Math.random() * 6)]
    );
};

export const GetRandomNumberFrom1ToMax = (max) => {
    return (
        Math.floor(Math.random() * (max - 1) + 1)
    );
};