// Datos para el gráfico de barras
const barChartData = {
    labels: ['Japón', 'Suiza', 'Singapur', 'Italia', 'España'],
    datasets: [{
        label: 'Esperanza de Vida (Años)',
        data: [84.6, 84.0, 83.0, 84.2, 83.5],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};

// Datos para el gráfico circular
const pieChartData = {
    labels: ['Europa', 'Asia', 'América', 'África', 'Oceanía'],
    datasets: [{
        label: 'Esperanza de Vida por Continente',
        data: [82, 75, 78, 65, 80],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
    }]
};

// Datos para el gráfico de género
const genderChartData = {
    labels: ['Hombres', 'Mujeres'],
    datasets: [{
        label: 'Esperanza de Vida (Años)',
        data: [79.5, 84.5],
        backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1
    }]
};

// Datos para el gráfico de línea
const lineChartData = {
    labels: ['2000', '2005', '2010', '2015', '2020'],
    datasets: [
        {
            label: 'Europa',
            data: [78, 79, 80, 81, 82],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: true
        },
        {
            label: 'Asia',
            data: [72, 73, 74, 75, 76],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            fill: true
        },
        {
            label: 'América',
            data: [75, 76, 77, 78, 79],
            borderColor: 'rgba(255, 206, 86, 1)',
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            fill: true
        },
        {
            label: 'África',
            data: [60, 61, 62, 63, 64],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true
        },
        {
            label: 'Oceanía',
            data: [78, 79, 80, 81, 82],
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            fill: true
        }
    ]
};

// Configuración de los gráficos
const barConfig = {
    type: 'bar',
    data: barChartData,
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + ' años';
                    }
                }
            }
        }
    }
};

const pieConfig = {
    type: 'pie',
    data: pieChartData,
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + ' años';
                    }
                }
            }
        }
    }
};

const genderConfig = {
    type: 'bar',
    data: genderChartData,
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + ' años';
                    }
                }
            }
        }
    }
};

const lineConfig = {
    type: 'line',
    data: lineChartData,
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + ' años';
                    }
                }
            }
        }
    }
};

// Crear los gráficos
const barChart = new Chart(document.getElementById('barChart'), barConfig);
const pieChart = new Chart(document.getElementById('pieChart'), pieConfig);
const genderChart = new Chart(document.getElementById('genderChart'), genderConfig);
const lineChart = new Chart(document.getElementById('lineChart'), lineConfig);

// Crear el mapa
var map = L.map('map').setView([20, 0], 2);

// Añadir capa de tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Datos GeoJSON de los países
var geojson = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "name": "Japón",
                "lifeExpectancy": 84.6,
                "population": 126000000
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[130.7642822265625, 32.39150997079264], [146.38430023193355, 32.39150997079264], [146.38430023193355, 46.12669752929264], [130.7642822265625, 46.12669752929264], [130.7642822265625, 32.39150997079264]]]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Suiza",
                "lifeExpectancy": 84.0,
                "population": 8654622
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[5.961456298828125, 45.81833097079264], [10.49255224609375, 45.81833097079264], [10.49255224609375, 47.80833097079264], [5.961456298828125, 47.80833097079264], [5.961456298828125, 45.81833097079264]]]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Singapur",
                "lifeExpectancy": 83.0,
                "population": 5703600
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[103.60991668701172, 1.26034797079264], [104.07961759521484, 1.26034797079264], [104.07961759521484, 1.47034797079264], [103.60991668701172, 1.47034797079264], [103.60991668701172, 1.26034797079264]]]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Italia",
                "lifeExpectancy": 84.2,
                "population": 60461826
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[6.62109375, 36.66034797079264], [18.77932071533203, 36.66034797079264], [18.77932071533203, 47.09034797079264], [6.62109375, 47.09034797079264], [6.62109375, 36.66034797079264]]]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "España",
                "lifeExpectancy": 83.5,
                "population": 46754778
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[-9.384765625, 36.00034797079264], [4.3310546875, 36.00034797079264], [4.3310546875, 43.78034797079264], [-9.384765625, 43.78034797079264], [-9.384765625, 36.00034797079264]]]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "República Dominicana",
                "lifeExpectancy": 74.17,
                "population": 10847910
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[-72.00833892822266, 17.57183097079264], [-68.3530517578125, 17.57183097079264], [-68.3530517578125, 19.92333097079264], [-72.00833892822266, 19.92333097079264], [-72.00833892822266, 17.57183097079264]]]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Australia",
                "lifeExpectancy": 83.0,
                "population": 25499884
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[112.92109375, -44.52034797079264], [159.109375, -44.52034797079264], [159.109375, -9.14034797079264], [112.92109375, -9.14034797079264], [112.92109375, -44.52034797079264]]]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Israel",
                "lifeExpectancy": 83.0,
                "population": 8655535
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[34.27109375, 29.49034797079264], [35.89209375, 29.49034797079264], [35.89209375, 33.33034797079264], [34.27109375, 33.33034797079264], [34.27109375, 29.49034797079264]]]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Francia",
                "lifeExpectancy": 83.3,
                "population": 67022000
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[-5.14306640625, 41.37034797079264], [9.56109375, 41.37034797079264], [9.56109375, 51.09034797079264], [-5.14306640625, 51.09034797079264], [-5.14306640625, 41.37034797079264]]]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Suecia",
                "lifeExpectancy": 83.6,
                "population": 10099265
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[11.11109375, 55.35034797079264], [24.159375, 55.35034797079264], [24.159375, 69.07034797079264], [11.11109375, 69.07034797079264], [11.11109375, 55.35034797079264]]]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Países Bajos",
                "lifeExpectancy": 82.6,
                "population": 17134872
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[3.359375, 50.75034797079264], [7.22109375, 50.75034797079264], [7.22109375, 53.55034797079264], [3.359375, 53.55034797079264], [3.359375, 50.75034797079264]]]
            }
        }
        // Añade más países según sea necesario
    ]
};

// Función para obtener el color basado en la esperanza de vida
function getColor(lifeExpectancy) {
    return lifeExpectancy > 80 ? '#800026' :
        lifeExpectancy > 75 ? '#BD0026' :
            lifeExpectancy > 70 ? '#E31A1C' :
                lifeExpectancy > 65 ? '#FC4E2A' :
                    lifeExpectancy > 60 ? '#FD8D3C' :
                        lifeExpectancy > 55 ? '#FEB24C' :
                            lifeExpectancy > 50 ? '#FED976' :
                                '#FFEDA0';
}

// Función para estilizar los países
function style(feature) {
    return {
        fillColor: getColor(feature.properties.lifeExpectancy),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

// Función para manejar los eventos de mouse
function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}

function resetHighlight(e) {
    geojson.resetStyle(e.target);
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
    layer.bindTooltip(feature.properties.name + '<br>Esperanza de Vida: ' + feature.properties.lifeExpectancy + ' años<br>Población: ' + feature.properties.population.toLocaleString());
}

// Añadir GeoJSON al mapa
L.geoJSON(geojson, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);