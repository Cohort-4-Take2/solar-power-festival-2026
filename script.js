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