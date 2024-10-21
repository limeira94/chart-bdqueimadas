// Inicializando o mapa 1 - Países da América do Sul
var map1 = L.map('map1').setView([-15.7801, -47.9292], 3);

// Inicializando o mapa 2 - Biomas Brasileiros
var map2 = L.map('map2').setView([-15.7801, -47.9292], 3);

// Inicializando o mapa 3 - Estados Brasileiros
var map3 = L.map('map3').setView([-15.7801, -47.9292], 3);

// Adicionando o tile layer (mapa base) a cada mapa
var tileLayer = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var attribution = '&copy; OpenStreetMap contributors';

var biomasData;
var estadosData;

L.tileLayer(tileLayer, {
    attribution: attribution
}).addTo(map1);

L.tileLayer(tileLayer, {
    attribution: attribution
}).addTo(map2);

L.tileLayer(tileLayer, {
    attribution: attribution
}).addTo(map3);

// Função para estilizar os polígonos
function style(feature) {
    return {
        fillColor: '#2E86C1',
        weight: 1,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.7
    };
}

var lastClickedLayer1;

// Carregando os dados GeoJSON nos mapas
// Mapa 1 - Países da América do Sul
fetch('data/south-america.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            style: style,
            onEachFeature: function (feature, layer) {
                layer.on('click', function (e) {

                    if (lastClickedLayer1) {
                        lastClickedLayer1.setStyle(style(lastClickedLayer1.feature));
                    }

                    layer.setStyle({
                        fillColor: 'yellow'
                    });
                    lastClickedLayer1 = layer;
                });
            }
        }).addTo(map1);
    });

var lastClickedLayer2;
// Mapa 2 - Biomas Brasileiros
fetch('data/biomas_brasil.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            style: style,
            onEachFeature: function (feature, layer) {
                // layer.bindPopup(feature.properties.name_biome);
                layer.on('click', function (e) {
                    if (lastClickedLayer2) {
                        lastClickedLayer2.setStyle(style(lastClickedLayer2.feature));
                    }
                    // Altera a cor do polígono para amarelo
                    layer.setStyle({
                        fillColor: 'yellow'
                    });
                    lastClickedLayer2 = layer;
                });
            }
        }).addTo(map2);
    });

var lastClickedLayer3;
// Mapa 3 - Estados Brasileiros
fetch('data/estados_brasil.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            style: style,
            onEachFeature: function (feature, layer) {
                // layer.bindPopup(feature.properties.name);
                layer.on('click', function (e) {
                    if (lastClickedLayer3) {
                        lastClickedLayer3.setStyle(style(lastClickedLayer3.feature));
                    }
                    // Altera a cor do polígono para amarelo
                    layer.setStyle({
                        fillColor: 'yellow'
                    });
                    lastClickedLayer3 = layer;
                });
            }
        }).addTo(map3);
    });