let autocomplete = null;

const productosData = [

{
nombre:"Mesa de manicura estándar",
material:"Melamina MDF 18mm",
categoria:"manicura",
precio:"$90.000",
medidas:"80 x 40 x 80 cm",
detalle:"Mesa compacta para salón de belleza, con superficie de vidrio y diseño práctico para trabajar con comodidad.",
imagenes:["img/mesa1.jpg","img/mesa1-2.jpg"],
sinStock: false
},
{
nombre:"Mesa de manicura restyling",
material:"Melamina MDF 18mm",
categoria:"manicura",
precio:"$100.000",
medidas:"80 x 40 x 80 cm",
detalle:"Versión renovada de la mesa estándar, ideal para salón de belleza, con superficie de vidrio y terminación moderna.",
imagenes:["img/mesa5.jpg","img/mesa5-2.jpg"],
sinStock: false
},
{
nombre:"Mesa de manicura premium",
material:"Melamina MDF 18mm",
categoria:"manicura",
precio:"$140.000",
medidas:"110 x 40 x 80 cm",
detalle:"Diseño moderno con cajón, guías telescópicas y tirador de cristal.",
imagenes:["img/mesa2.jpg","img/mesa2-2.jpg"],
sinStock: false
},
{
nombre:"Mesa Ratona",
material:"Melamina MDF 18mm",
categoria:"mesas",
precio:"$80.000",
medidas:"80 x 50 x 45 cm",
detalle:"Mesa ratona de diseño moderno con superficie de vidrio, ideal para living o sala de estar.",
imagenes:["img/mesa3.jpg","img/mesa3-2.jpg"],
sinStock: false
},
{
nombre:"Mesa de Luz",
material:"Melamina MDF 18mm",
categoria:"mesas",
precio:"$80.000",
medidas:"43 x 40 x 58 cm",
detalle:"Mesa de luz robusta con patas regulables en altura y cajón de guardado.",
imagenes:["img/mesa4.jpg","img/mesa4-2.jpg"],
sinStock: false
},
{
nombre:"Juguetero Organizador",
material:"Melamina MDF 18mm",
categoria:"escritorios",
precio:"$160.000",
medidas:"70 x 30 x 100 cm",
detalle:"Organizador con 2 baúles móviles y tiradores personalizables para mantener todo ordenado.",
imagenes:["img/mesa6.jpg","img/mesa6-2.jpg"],
sinStock: true
},
{
nombre:"Tocador Hollywood",
material:"Melamina MDF 18mm",
categoria:"escritorios",
precio:"$400.000",
medidas:"85 x 45 x 145 cm",
detalle:"Tocador con doble cajón, guías telescópicas, tiradores de cristal, luces embutidas y comando minimalista para conectar accesorios.",
imagenes:["img/mesa7.jpg","img/mesa7-2.jpg","img/mesa7-3.jpg","img/mesa7-4.jpg"],
sinStock: true
},
{
nombre:"Mesa de manicura premium con auxiliar",
material:"Melamina MDF 18mm",
categoria:"manicura",
precio:"$180.000",
medidas: "110 x 40 x 80 cm",
detalle:"Mesa de manicura premium con cajón, guías telescópicas y tirador de cristal. Incluye auxiliar con 2 estantes para mayor organización.",
imagenes:["img/mesa8.jpg","img/mesa8-2.jpg"],
sinStock: true
},
{
nombre:"Carro auxiliar con ruedas",
material:"Melamina MDF 18mm",
categoria:"complementos",
precio:"$65.000",
medidas: "34 x 30 x 70 cm",
detalle:"Auxiliar con 4 estantes y ruedas giratorias para mover herramientas y accesorios con facilidad.",
imagenes:["img/aux1.jpg","img/aux1-2.jpg"],
sinStock: true
},
{
nombre:"Esmaltero",
material:"Melamina MDF 18mm",
categoria:"complementos",
precio:"$18.000",
medidas:"43 x 8 x 60 cm",
detalle:"Esmaltero con 4 estantes para organizar esmaltes y accesorios de belleza.",
imagenes:["img/esm1.jpg"],
sinStock: true
},
{
nombre:"Esmaltero premium",
material:"Melamina MDF 18mm",
categoria:"complementos",
precio:"$30.000",
medidas:"83 x 8 x 60 cm",
detalle:"Esmaltero ampliado con 4 estantes para organizar esmaltes y accesorios de belleza.",
imagenes:["img/esm2.jpg"],
sinStock: true
},
{
nombre:"Cajonera",
material:"Melamina MDF 18mm",
categoria:"mesas",
precio:"$200.000",
medidas:"43 x 40 x 80 cm",
detalle:"Cajonera con 4 cajones para organizar tus objetos de forma práctica y ordenada.",
imagenes:["img/caj1.jpg"],
sinStock: true
},
];

const reseñasData = [

{
nombre:"Martín",
mensaje:"¡Muy buena atención!",
ubicacion:"San Lorenzo, Santa Fe"
},
{
nombre:"Cintia",
mensaje:"La verdad, hermosa la mesa.",
ubicacion:"Granadero Baigorria, Santa Fe"
},
{
nombre:"Valentina",
mensaje:"Excelente calidad y diseño.",
ubicacion:"Arroyo Seco, Santa Fe"
},
{
nombre:"Norma",
mensaje:"Muy recomendable, excelente atención.",
ubicacion:"Rosario, Santa Fe"
},
{
nombre:"Roxana",
mensaje:"Quedé encantada con mi mesa, superó mis expectativas.",
ubicacion:"Rosario, Santa Fe"
},
{
nombre:"Julio",
mensaje:"Excelente trabajo, la mesa ratona es hermosa y muy funcional.",
ubicacion:"Villa Gobernador Gálvez, Santa Fe"
},
{
nombre:"Ignacia",
mensaje:"Me encantó el diseño de la mesa de luz, es justo lo que buscaba para mi habitación.",
ubicacion:"Villa Gobernador Gálvez, Santa Fe"
},
{
nombre:"Belu",
mensaje:"La mesa de manicura premium es una belleza. La calidad es excelente y el diseño moderno la hace destacar en mi salón.",
ubicacion:"Granadero Baigorria, Santa Fe"
},
{
nombre:"Brenda ",
mensaje:"Hermosa la mesa con auxiliar, es súper práctica y el diseño es muy lindo.",
ubicacion:"Rosario, Santa Fe"
},
{
nombre:"Nerina",
mensaje:"La mesa me encantó.",
ubicacion:"Rosario, Santa Fe"
},
{
nombre:"Sa",
mensaje:"Excelente calidad, la mesa con cajón es perfecta.",
ubicacion:"Coronel Bogado, Santa Fe"
},
{
nombre:"Nicolás",
mensaje:"Hermosa y muy buena calidad.",
ubicacion:"Rosario, Santa Fe"
},
];

// ================= RESEÑAS =================

const contenedorReseñas = document.getElementById("reseñasContainer");

reseñasData.forEach(r => {

const card = document.createElement("div");
card.classList.add("reseña");

card.innerHTML = `
<h3>${r.nombre}</h3>
<p>"${r.mensaje}"</p>
<span>${r.ubicacion}</span>
`;

contenedorReseñas.appendChild(card);

});

let scrollPos = 0;
let autoScrollActivo = true;
let intervalo;
let reanudarTimeout;

// iniciar auto scroll
function iniciarAutoScroll(){
intervalo = setInterval(() => {

if(!autoScrollActivo) return;

scrollPos += 320;

if(scrollPos >= contenedorReseñas.scrollWidth){
scrollPos = 0;
}

contenedorReseñas.scrollTo({
left: scrollPos,
behavior: "smooth"
});

}, 3000);
}

// detener temporalmente
function pausarAutoScroll(){
autoScrollActivo = false;

clearTimeout(reanudarTimeout);

reanudarTimeout = setTimeout(() => {
autoScrollActivo = true;
}, 5000);
}

// detectar interacción
contenedorReseñas.addEventListener("scroll", pausarAutoScroll);
contenedorReseñas.addEventListener("touchstart", pausarAutoScroll);
contenedorReseñas.addEventListener("mousedown", pausarAutoScroll);

// iniciar
iniciarAutoScroll();
// ================= PRODUCTOS =================

const contenedor = document.getElementById("productos");

function cargarProductos(lista){

contenedor.innerHTML = "";

if(lista.length === 0){
contenedor.innerHTML = `
<div class="sin-resultados">
  <strong>No encontramos productos</strong>
  <span>Probá con otra búsqueda o elegí otra categoría.</span>
</div>
`;
return;
}

const fragment = document.createDocumentFragment();

lista.forEach(producto=>{

const card = document.createElement("div");
card.classList.add("producto");

const estado = producto.sinStock ? "Consultar disponibilidad" : "Disponible";

card.innerHTML = `
  ${producto.sinStock ? '<div class="sin-stock pulso">A PEDIDO</div>' : ''}
  <div class="producto-media">
    <img src="${producto.imagenes[0]}" alt="${producto.nombre}" loading="lazy" decoding="async" onerror="this.src='img/placeholder.jpg'">
  </div>
  <div class="producto-info">
    <h3>${producto.nombre}</h3>
    <div class="producto-meta">
      <strong>${producto.precio}</strong>
      <span class="producto-estado">${estado}</span>
    </div>
  </div>
`;

card.style.opacity = "0";

setTimeout(()=>{
card.style.opacity = "1";
card.style.transition = "0.4s";
},50);

card.onclick = () => abrirModal(producto);

fragment.appendChild(card);

});

contenedor.appendChild(fragment);
}

cargarProductos(productosData);

// ================= FILTROS =================

const botonesFiltro = document.querySelectorAll(".filtros button");
const buscarProducto = document.getElementById("buscarProducto");
let filtroActual = "todos";

function normalizarTexto(texto){
return texto
.toString()
.toLowerCase()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g, "");
}

function aplicarFiltros(){
const busqueda = normalizarTexto(buscarProducto.value.trim());

const filtrados = productosData.filter(producto=>{
const coincideCategoria = filtroActual === "todos" || producto.categoria === filtroActual;
const textoProducto = normalizarTexto([
producto.nombre,
producto.material,
producto.categoria,
producto.precio,
producto.medidas,
producto.detalle
].join(" "));

const coincideBusqueda = !busqueda || textoProducto.includes(busqueda);

return coincideCategoria && coincideBusqueda;
});

cargarProductos(filtrados);
}

botonesFiltro.forEach(btn=>{

btn.onclick=()=>{

botonesFiltro.forEach(b=>b.classList.remove("activo"));
btn.classList.add("activo");

filtroActual = btn.dataset.filtro;
aplicarFiltros();

};

});

buscarProducto.addEventListener("input", aplicarFiltros);

// ================= MODAL =================

const modal = document.getElementById("modalProducto");

const modalImg = document.getElementById("modalImg");
const modalNombre = document.getElementById("modalNombre");
const modalEstado = document.getElementById("modalEstado");
const modalMaterial = document.getElementById("modalMaterial");
const modalPrecio = document.getElementById("modalPrecio");
const modalMedidas = document.getElementById("modalMedidas");
const modalDetalle = document.getElementById("modalDetalle");

const btnConsultar = document.getElementById("btnConsultar");

function abrirModal(producto){

modal.style.display="flex";
document.body.style.overflow = "hidden";

modalImg.src = producto.imagenes[0];
modalImg.onerror = () => modalImg.src = "img/placeholder.jpg";

modalNombre.innerText = producto.nombre;
modalEstado.innerText = producto.sinStock ? "Consultar disponibilidad" : "Disponible";
modalEstado.className = producto.sinStock ? "modal-estado consultar" : "modal-estado disponible";
modalMaterial.innerText = producto.material;
modalPrecio.innerText = producto.precio;
modalMedidas.innerText = producto.medidas;
modalDetalle.innerText = producto.detalle;

btnConsultar.onclick=()=>{

const mensaje = `Hola, quiero consultar por este producto:

Producto: ${producto.nombre}
Precio: ${producto.precio}
Medidas: ${producto.medidas}

${producto.sinStock ? "¿Se puede coordinar a pedido o consultar disponibilidad?" : "¿Está disponible para comprar?"}`;

const url="https://wa.me/5493416930606?text="+encodeURIComponent(mensaje);

window.open(url,"_blank");

};

btnConsultar.innerText = producto.sinStock ? "Consultar disponibilidad por WhatsApp" : "Comprar o consultar por WhatsApp";

}

// ================= CERRAR MODAL =================

document.querySelector(".cerrar").onclick=()=>{
modal.style.display="none";
document.body.style.overflow = "auto";
};

modal.addEventListener("click", (e) => {
if(e.target === modal){
modal.style.display = "none";
document.body.style.overflow = "auto";
}
});

// ================= MENU MOBILE =================

const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

function cerrarMenu(){
menu.classList.remove("active");
document.body.classList.remove("menu-abierto");
menuToggle.setAttribute("aria-expanded", "false");
menuToggle.setAttribute("aria-label", "Abrir menú");
menuToggle.innerText = "☰";
}

function abrirMenu(){
menu.classList.add("active");
document.body.classList.add("menu-abierto");
menuToggle.setAttribute("aria-expanded", "true");
menuToggle.setAttribute("aria-label", "Cerrar menú");
menuToggle.innerText = "×";
}

menuToggle.addEventListener("click", () => {
if(menu.classList.contains("active")){
cerrarMenu();
}else{
abrirMenu();
}
});

// cerrar menú al tocar link
document.querySelectorAll(".menu a").forEach(link=>{
link.addEventListener("click", ()=>{
cerrarMenu();
});
});

document.addEventListener("click", (e) => {
if(!menu.classList.contains("active")) return;
if(menu.contains(e.target) || menuToggle.contains(e.target)) return;
cerrarMenu();
});

document.addEventListener("keydown", (e) => {
if(e.key === "Escape"){
cerrarMenu();
}
});

window.addEventListener("resize", () => {
if(window.innerWidth > 768){
cerrarMenu();
}
});

// ================= PROMO =================

const promo = document.getElementById("promoPill");
const cerrarPromo = document.getElementById("cerrarPromo");

cerrarPromo.addEventListener("click", () => {
promo.style.display = "none";
});

// ================= VIDEOS DIFERIDOS =================

function cargarVideo(video){
const source = video.querySelector("source[data-src]");

if(!source) return;

source.src = source.dataset.src;
source.removeAttribute("data-src");
video.load();
video.play().catch(()=>{});
}

const videosNosotros = document.querySelectorAll(".video-nosotros");

if("IntersectionObserver" in window){
const videoObserver = new IntersectionObserver((entries, observer)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
cargarVideo(entry.target);
observer.unobserve(entry.target);
}
});
},{
rootMargin:"220px 0px"
});

videosNosotros.forEach(video=>videoObserver.observe(video));
}else{
videosNosotros.forEach(cargarVideo);
}

// ================= ENVÍOS =================

const origen = "Piedrabuena 2168, S2126 Alvear, Santa Fe, Argentina";

document.getElementById("calcularEnvio").addEventListener("click", () => {

let destino = document.getElementById("direccionCliente").value;

if (autocomplete) {
const place = autocomplete.getPlace();
if(place && place.formatted_address){
destino = place.formatted_address;
}
}

if(!destino){
document.getElementById("resultadoEnvio").innerHTML =
"<span class='resultado-error'>Ingresá una dirección válida para calcular el envío.</span>";
return;
}

// protección google
if (typeof google === "undefined" || !google.maps) {
document.getElementById("resultadoEnvio").innerHTML =
`<span class='resultado-error'>No pudimos cargar el cálculo automático.</span><br>
<a class='resultado-link' href='https://wa.me/5493416930606' target='_blank'>Consultanos por WhatsApp</a>`;
return;
}

const service = new google.maps.DistanceMatrixService();

service.getDistanceMatrix({
origins: [origen],
destinations: [destino],
travelMode: 'DRIVING',
}, (response, status) => {

if (status !== "OK") {
document.getElementById("resultadoEnvio").innerHTML =
"<span class='resultado-error'>No pudimos calcular la distancia. Probá con otra dirección.</span>";
return;
}

const data = response.rows[0].elements[0];

if(data.status !== "OK"){
document.getElementById("resultadoEnvio").innerHTML =
"<span class='resultado-error'>No se pudo calcular el envío para esa dirección.</span>";
return;
}

const distanciaKm = data.distance.value / 1000;

let costo = 10000;

if (distanciaKm <= 10) costo += 7000;
else if (distanciaKm <= 20) costo += 14000;
else if (distanciaKm <= 30) costo += 21000;
else if (distanciaKm <= 40) costo += 28000;
else if (distanciaKm <= 50) costo += 35000;
else if (distanciaKm <= 60) costo += 42000;
else if (distanciaKm <= 70) costo += 49000;
else if (distanciaKm <= 80) costo += 56000;
else {
document.getElementById("resultadoEnvio").innerHTML = `
<div class="resultado-box">
<strong class="resultado-error">
No realizamos envíos automáticos a esa distancia.<br>
Escribinos por WhatsApp y lo vemos juntos.
</strong>
</div>`;
return;
}

document.getElementById("resultadoEnvio").innerHTML = `
<div class="resultado-box">
<div class="fila" style="justify-content:center;">
<strong class="precio">Envío estimado: $${costo}</strong>
</div>
</div>`;

});

});

// ================= AUTOCOMPLETE =================

function iniciarAutocomplete(){

if (typeof google === "undefined" || !google.maps || !google.maps.places) {
return;
}

const input = document.getElementById("direccionCliente");

autocomplete = new google.maps.places.Autocomplete(input, {
types: ["address"],
componentRestrictions: { country: "ar" }
});

}

window.addEventListener("load", iniciarAutocomplete);
// seleccionar secciones automáticamente
const elementos = document.querySelectorAll(
  "section:not(.catalogo):not(.pagos), .envios, .footer"
);

// agregar clase animar sin tocar HTML
elementos.forEach(el => el.classList.add("animar"));

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
    }
  });
},{
  threshold:0.2
});

elementos.forEach(el=>observer.observe(el));

let mapaIniciado = false;

function iniciarMapa(){

if (mapaIniciado || typeof google === "undefined" || !google.maps) return;

const mapaContenedor = document.getElementById("mapaGoogle");

if (!mapaContenedor) return;

mapaIniciado = true;

const ubicacion = {
  lat: -33.032123,
  lng: -60.642987
};

const mapa = new google.maps.Map(mapaContenedor, {
  zoom: 15,
  center: ubicacion,
  styles: [
  ]
});
const geocoder = new google.maps.Geocoder();

geocoder.geocode(
  { address: "Piedrabuena 2168, Alvear, Santa Fe, Argentina" },
  (results, status) => {

    if (status === "OK") {

      mapa.setCenter(results[0].geometry.location);

      new google.maps.Marker({
        map: mapa,
        position: results[0].geometry.location,
        icon: {
          url: "img/ubicacion.png",
          scaledSize: new google.maps.Size(60, 60)
        }
      });

    }
  }
);
}

// iniciar cuando carga
window.addEventListener("load", iniciarMapa);
const mapaEl = document.getElementById("mapaGoogle");

const observerMapa = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      iniciarMapa();
      observerMapa.unobserve(entry.target);
    }
  });
});

if (mapaEl) {
observerMapa.observe(mapaEl);
}
