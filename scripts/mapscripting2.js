// Initialiseer de kaart
let map = L.map('kantoor').setView([51.16121865362231, 4.2090890099673475], 17);
let marker = L.marker([51.16121865362231, 4.2090890099673475]).addTo(map);
marker.bindPopup("<b>Office</b><br>Steendonkstraat 1").openPopup();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
