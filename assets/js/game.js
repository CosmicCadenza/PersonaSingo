window.onload = background();
let songs = [];
let played = [];
let current = {};

function background() {
    songs = fetch("assets/js/songs.json");
    getSong();
}

function getSong() {
    if(songs.length > 0) {
        current = songs.splice(Math.floor(Math.random()*(songs.length-1)), 1);
        played.push(current.name);
        document.getElementById("song").innerHTML = current.name;
        document.getElementById("player").src = current.url;
    }
}