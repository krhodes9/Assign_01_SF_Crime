var map = L.map('map').setView([37.7, -122.4], 10);

  // load a tile layer
var Stamen_TonerLite = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);

 var ratIcon = L.icon({
    iconUrl:'https://cdn0.iconfinder.com/data/icons/isometric-city-basic-transport/480/car-police-front-01-512.png',
    iconSize: [50,40]
  });
  // load GeoJSON from an external file

$.getJSON("https://raw.githubusercontent.com/gbrunner/adv-python-for-gis-and-rs/master/Week%201/sf_crime.geojson",function(data){
  var ratIcon = L.icon({
    iconUrl: 'https://cdn0.iconfinder.com/data/icons/isometric-city-basic-transport/480/car-police-front-01-512.png',
    iconSize: [50,40]
  });
    // add GeoJSON layer to the map once the file is loaded
L.geoJson(data  ,{
    pointToLayer: function(feature,latlng){
	  return L.marker(latlng,{icon: ratIcon});
    }
  }  ).addTo(map);
});

