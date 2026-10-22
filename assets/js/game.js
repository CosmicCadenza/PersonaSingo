let songs = [];
let played = [];
let current = {};
window.onload = newGame();

async function newGame() {
    played = [];
    let response = await fetch("assets/js/songs.json");
    songs = await response.json();
    getSong();
}

function getSong() {
    if(songs.length > 0) {
        current = songs.splice(Math.floor(Math.random()*(songs.length)), 1)[0];
        played.push(current.name);
        document.getElementById("song").innerHTML = current.name;
        document.getElementById("player").src = current.url;
        document.getElementById("past").innerHTML = played.join("<br>");
    }
}