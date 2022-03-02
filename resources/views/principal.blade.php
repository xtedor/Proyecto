<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Add a polygon to a map using a GeoJSON source</title>
<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no">
<link href="https://api.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.css" rel="stylesheet">
<script src="https://api.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.js"></script>
<style>
body { margin: 0; padding: 0; }
#map { position: absolute; top: 0; bottom: 0; width: 100%; }
</style>
</head>
<body>
<div id="map"></div>
<script>
	mapboxgl.accessToken = 'pk.eyJ1IjoiaGFydmV5NDY5MDQiLCJhIjoiY2tvend3OXl1MHkzODJ3bXdxNGJ4MXJtayJ9.61QXAUAsuOnuAst-SIiTYg';
    var map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/harvey46904/ckozxa0n12inh17o0igtcqyq5', // style URL
        center: [-77.269,1.209], // starting position
        zoom: 13// starting zoom
    });

    map.on('load', function () {
        // Add a data source containing GeoJSON data.
        map.addSource('maine', {
            'type': 'geojson',
            'data': {
                'type': 'Feature',
                'geometry': {
                    'type': 'Polygon',
                    // These coordinates outline Maine.
                    'coordinates': [
                        [
                          
                        ]
                    ]
                }
            }
        });

        // Add a new layer to visualize the polygon.
        map.addLayer({
            'id': 'maine',
            'type': 'fill',
            'source': 'maine', // reference the data source
            'layout': {},
            'paint': {
                'fill-color': '#4EF7DB', // blue color fill
                'fill-opacity': 0.4
            }
        });
        // Add a black outline around the polygon.
        map.addLayer({
            'id': 'outline',
            'type': 'line',
            'source': 'maine',
            'layout': {},
            'paint': {
            'line-color': '#000',
            'line-width': 3
            }
        });
    });
</script>

</body>
</html>