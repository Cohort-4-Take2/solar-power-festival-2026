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


function playSong(songTitle, songArtist){
    return `Now playing ${songTitle} by ${songArtist} on the main stage`;
}

console.log(playSong("Song name", "Song artist"));