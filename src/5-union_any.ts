// union types
let subscribers: number | string = "10M";

let apiRequestStatus: 'pending' | 'success' | 'error' = "pending";
// apiRequestStatus = "done" // error

let airlineSeat: 'aisle' | 'window' | 'middle' = "middle";
airlineSeat = "window";

// any (avoid any)

let orders = ["10","25","35","47"];
let currentOrder: string | undefined;
// let currentOrder: any;

for(let allOrders of orders){
    if(allOrders === "25"){
        currentOrder = allOrders;
        break;
    }
};

console.log(currentOrder);



