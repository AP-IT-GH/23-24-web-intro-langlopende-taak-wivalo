// Initialiseer de kaart
let map = L.map('wivalomap').setView([51.23009, 4.41616], 17);
let marker = L.marker([51.23009, 4.41616]).addTo(map);
marker.bindPopup("<b>AP-Hogeschool</b><br>Ellermanstraat 33").openPopup();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// geografische grenzen
let bounds = [[51.23041, 4.4155], [51.22991, 4.41675]];


// Kleur grens
L.rectangle(bounds, {color: "#e60005", weight: 1}).addTo(map);
map.fitBounds(bounds);

