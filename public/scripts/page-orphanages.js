// // //tipos de dados
// // //string ""
// // //number 01
// // //object {}
// // //Boolean true or false
// // //array []

// // // creat map//
const map = L.map("mapid").setView([-27.222633, -49.6455874], 15);

// // // create and  add tilelayer///

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

//creat icon//
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//create popup overlay
const popup = L.popup({
  closeButton: false,
  className: "map-popup",
  minWidth: 240,
  minHeight: 240,
}).setContent(
  'Lar das meninas <a hrf="orphanage.html?id=1"class="choose-orphanage"> <img src="./public/images/arrow-white.svg"</a>'
);

//creat and add marker//
L.marker([51.5, -0.09])
  .addTo(map)
  .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
  .openPopup();
