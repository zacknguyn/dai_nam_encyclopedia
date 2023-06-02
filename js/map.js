var map = new maplibregl.Map({
    container: 'map',
    style: 'https://demotiles.maplibre.org/style.json', // stylesheet location
    center: [-250, 0], // starting position [lng, lat]
    zoom: 3 // starting zoom
});