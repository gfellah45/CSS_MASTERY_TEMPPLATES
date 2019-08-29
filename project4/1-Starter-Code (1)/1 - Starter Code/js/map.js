L.mapquest.key = "	cTOfvD8V3O6Sa7CDmZfaG0DWvHbVPRRF";

// 'map' refers to a <div> element with the ID map
L.mapquest.map("map", {
    center: [40.7128, -122.4194],
    layers: L.mapquest.tileLayer("map"),
    zoom: 12
});