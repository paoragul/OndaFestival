const imgElement = document.getElementById('artists');
const imgElementStage = document.getElementById('stages');
// Array with image artists
var imagesArtist = [
    "img/artists/shay.png",
    "img/artists/gazoettiakola.jpeg",
    "img/artists/josman.png",
    "img/artists/hamza.png",
    "img/artists/lafeve.png",
    "img/artists/dojacat.jpeg",
];
// Array with image stages
var imagesStage = [
    "img/stages/balzaal.jpg",
    "img/stages/boombox.jpg",
    "img/stages/lapetitemaisondanslaprairie.jpg",
    "img/stages/garage.jpg",
    "img/stages/labo.jpg",
];
let index = 0; 
function change() {
    imgElement.src = imagesArtist[index];
    imgElementStage.src = imagesStage[index];
    // if index > 3 then index = 0 otherwhise index++
    index > 3 ? index = 0 : index++;
}
change();
window.onload = function () {
    setInterval(change, 1000);
};