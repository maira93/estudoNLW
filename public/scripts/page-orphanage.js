const options = {
   dragging: false,
   touchZoom: false,
   doubleClickZoom: false,
   scrollwheelZoom: false,
   zoomControl: false,

}

// // // creat map//
const map = L.map("mapid",options).setView([-27.222633, -49.6455874], 15);

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

//creat and add marker//
L.marker([51.5, -0.09]).addTo(map);


/* image gallery*/

function selectImage(event) {
  const button = event.currentTarget

  console.log(button.children)

  //remover todas as classes .active
  const buttons = document.querySelectorAll(".images button")
  buttons.forEach(removeActiveClass)

  function removeActiveClass(button) {
    button.classList.remove("active")
  }
  
  //selecionar a image clicada
  const image = button.children[0]
  const imageContainer = document.querySelector(".orphanage-details > img")

  //atualizar o container de images
 imageContainer.src = image.src 
 
  // adicionar a classe .active para este botao
  button.classList.add('active')
}
