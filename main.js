var map = L.map('map').setView([30.101959, 31.341840], 7);
var options = {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 22,
  id: 'mapbox.satellite',
  accessToken: 'pk.eyJ1IjoibW9zdGFmYWFiZGVscmFobWFuIiwiYSI6ImNqd2h4a2FpMDBqeHc0Ym41bG9vc2Uyc20ifQ.hSU-ewch930GLP88NNC3Kg'
}
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', options).addTo(map);

var markerArray = [
  [30.101959, 31.341840],
  [30.034480, 31.340217],
  [31.340217, 31.521618],
  [30.187422, 31.474272],
  [30.180026, 31.281742],
  [30.091981, 31.204214],
  [30.084655, 31.202738],
  [30.102744, 31.165179],
  [30.105977, 31.283506],
  [30.147811, 31.260631],
  [30.127983, 31.275120],
  [30.124924, 31.183463],
  [30.249074, 31.171507],
  [30.403220, 31.069798],
  [30.512200, 31.449016],
  [30.874535, 31.128060],
  [30.927957, 30.826739],
  [30.927957, 30.826739],
  [31.220714, 30.365215],
  [30.928826, 29.789237]

]


var markers = L.markerClusterGroup();

for (let i = 0; i < markerArray.length; i++) {
  var point = L.marker(markerArray[i]);
  markers.addLayer(point);
}
map.addLayer(markers)

var satbtn = document.getElementById('satMapBtn')
var rdbtn = document.getElementById('rdMapBtn')

function satmapBtn() {
  options.id = 'mapbox.satellite';
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', options).addTo(map);
  rdbtn.className = 'btn btn-default'
  satbtn.className += ' active'

}

function roadmapBtn() {
  options.id = 'mapbox.streets';
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', options).addTo(map);

  satbtn.className = 'btn btn-default'
  rdbtn.className += ' active'

}

