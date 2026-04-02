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


function upgradeStatus(name){
    let status = "VIP"
    return name + ": " + status;
}
