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



function playSong(songTitle, songArtist){
    return `Now playing ${songTitle} by ${songArtist} on the main stage`;
}

console.log(playSong("Song name", "Song artist"));
