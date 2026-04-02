// --- GLOBAL FESTIVAL DATA ---
const festivalConfig = {
    name: "Solar Power NZ",
    venue: "Western Springs, Auckland",
    capacity: 50000,
    ticketsSold: 48500,
    isSunny: true,
    basePrice: 120,
    lineup: ["Lorde", "Marlon Williams", "Benee"]
};

// STUDENTS: ADD YOUR FUNCTIONS BELOW THIS LINE

/*

let standard= 120;
let vip= 250;
let backstage=500


if ("backstage = 500"){
    console.log(`Backstage ${backstage}`);
} else if ("vip=250"){
    console.log(`VIP ${vip}`);
} else {
    console.log(`Standard Tickets ${standard}`)
}

if (ticketsSold >= capacity) {
    console.log ("Event Sold Out")
} else 
    function subtract(capacity, ticketsSold) {
    return capacity - ticketsSold
}console.log ("Tickets still available!")

*/


function calculatePrice(tier) {
    let price;
    if (tier === "Standard") {
        price = 120;
    } else if (tier === "VIP") {
        price = 250;
    } else {
        price = 500
    }
}
calculatePrice("Standard");







function checkCapacity(sold, limit) {
    if (sold >= limit) {
        return "Event Sold Out."
    } else {
        return "Tickets Available."
    }
}


function checkEntry(age, hasTicket) {
    if (age >= 18 && hasTicket) {
        console.log("Welcome to the Sun!")
    } else if (age < 18 && hasTicket) {
        console.log("Access Denied")
    }
}


calculatePrice("Standard");


