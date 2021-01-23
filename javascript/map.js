const map = L.map('map').setView([0,0],1);
L.tileLayer('https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=ptygvvXipEWuAcUTKU06', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(map);
L.control.scale({
    metric: true,
    imperial: false,
    position: 'bottomright'
}).addTo(map)

