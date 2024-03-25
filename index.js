const batteryBatches = [
    { id: 1, quantity: 4 },
    { id: 2, quantity: 5 },
    { id: 3, quantity: 3 },
    { id: 4, quantity: 6 },
    { id: 5, quantity: 8 }
];

const totalBatteries = batteryBatches.reduce((total, batch) => {
    return total + batch.quantity;
}, 0);

console.log(totalBatteries); 
