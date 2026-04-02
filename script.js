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

let age= 18;
let hasTicket= true;

if (age >= 18 && hasTicket) {
    console.log ("Welcome to the Sun!")
} else if (age <18 && hasTicket) {
    console.log ("Access Denied")
}

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