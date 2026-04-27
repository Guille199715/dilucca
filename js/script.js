let autocomplete = null;

const productosData = [

{
nombre:"Mesa Manicura Estándar",
material:"Melamina MDF 18mm",
categoria:"manicura",
precio:"$90.000",
medidas:"80 x 40 x 80 cm",
detalle:"Mesa ideal para salón de belleza con superficie de vidrio",
imagenes:["img/mesa1.jpg","img/mesa1-2.jpg"]
},
{
nombre:"Mesa Manicura Restyling",
material:"Melamina MDF 18mm",
categoria:"manicura",
precio:"$100.000",
medidas:"80 x 40 x 80 cm",
detalle:"Rediseño de la Mesa Estándar, ideal para salón de belleza, con superficie de vidrio",
imagenes:["img/mesa5.jpg","img/mesa5-2.jpg"]
},
{
nombre:"Mesa Manicura Premium",
material:"Melamina MDF 18mm",
categoria:"manicura",
precio:"$140.000",
medidas:"110 x 40 x 80 cm",
detalle:"Diseño moderno, con agregado de cajón, guias telescópicas y tirador de cristal",
imagenes:["img/mesa2.jpg","img/mesa2-2.jpg"]
},
{
nombre:"Mesa Ratona",
material:"Melamina MDF 18mm",
categoria:"mesas",
precio:"$80.000",
medidas:"80 x 50 x 45 cm",
detalle:"Diseño moderno, con superficie de vidrio",
imagenes:["img/mesa3.jpg","img/mesa3-2.jpg"]
},
{
nombre:"Mesa de Luz",
material:"Melamina MDF 18mm",
categoria:"mesas",
precio:"$80.000",
medidas:"43 x 40 x 58 cm",
detalle:"Diseño robusto con patas regulables en altura y un cajón",
imagenes:["img/mesa4.jpg","img/mesa4-2.jpg"]
},
{
nombre:"Juguetero Organizador",
material:"Melamina MDF 18mm",
categoria:"escritorios",
precio:"$160.000",
medidas:"70 x 30 x 100 cm",
detalle:"Diseño con 2 baules móviles y tiradores personalizables",
imagenes:["img/mesa6.jpg","img/mesa6-2.jpg"]
},
{
nombre:"Tocador Hollywood",
material:"Melamina MDF 18mm",
categoria:"escritorios",
precio:"$300.000",
medidas:"85 x 45 x 145 cm",
detalle:"Diseño ultra estético, con doble cajón con guias telescopicas y tirador de cristal, luces embutidas y comando minimalista para conectar tus aparatos favoritos",
imagenes:["img/mesa7.jpg","img/mesa7-2.jpg","img/mesa7-3.jpg","img/mesa7-4.jpg"]
},
{
nombre:"Mesa manicura Premium con auxiliar",
material:"Melamina MDF 18mm",
categoria:"manicura",
precio:"$180.000",
medidas: "110 x 40 x 80 cm",
detalle:"Diseño moderno, con agregado de cajón, guias telescópicas y tirador de cristal. Incluye auxiliar con 2 estantes para mayor organización",
imagenes:["img/mesa8.jpg","img/mesa8-2.jpg"]
},
{
nombre:"Auxiliar con ruedas",
material:"Melamina MDF 18mm",
categoria:"complementos",
precio:"$55.000",
medidas: "34 x 30 x 70 cm",
detalle:"Diseño con 4 estantes y ruedas giratorias para fácil movilidad",
imagenes:["img/aux1.jpg","img/aux1-2.jpg"]
},
{
nombre:"Esmaltero",
material:"Melamina MDF 18mm",
categoria:"complementos",
precio:"$18.000",
medidas:"43 x 8 x 60 cm",
detalle:"Diseño con 4 estantes para organizar tus esmaltes y accesorios de belleza",
imagenes:["img/esm1.jpg"]
},
{
nombre:"Esmaltero Premium",
material:"Melamina MDF 18mm",
categoria:"complementos",
precio:"$30.000",
medidas:"83 x 8 x 60 cm",
detalle:"Diseño ampliado con 4 estantes para organizar tus esmlates y accesorios de belleza",
imagenes:["img/esm2.jpg"]
},
];

const reseñasData = [

{
nombre:"Martin",
mensaje:"Muy buena!🙌",
ubicacion:"San Lorenzo, Santa Fe"
},
{
nombre:"Cintia",
mensaje:"La verdad hermosa la mesa! 💯",
ubicacion:"Granadero Baigorria, Santa Fe"
},
{
nombre:"Valentina",
mensaje:"Excelente calidad y diseño! 😍",
ubicacion:"Arroyo Seco, Santa Fe"
},
{
nombre:"Norma",
mensaje:"Muy recomendable, excelente atención! 👌",
ubicacion:"Rosario, Santa Fe"
},
{
nombre:"Roxana",
mensaje:"Quedé encantada con mi mesa, superó mis expectativas! 🌟",
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

setInterval(() => {

scrollPos += 320;

if(scrollPos >= contenedorReseñas.scrollWidth){
scrollPos = 0;
}

contenedorReseñas.scrollTo({
left: scrollPos,
behavior: "smooth"
});

}, 3000);

// ================= PRODUCTOS =================

const contenedor = document.getElementById("productos");

function cargarProductos(lista){

contenedor.innerHTML = "";

const fragment = document.createDocumentFragment();

lista.forEach(producto=>{

const card = document.createElement("div");
card.classList.add("producto");

card.innerHTML = `
<img src="${producto.imagenes[0]}" alt="${producto.nombre}" onerror="this.src='img/placeholder.jpg'">
<h3>${producto.nombre}</h3>
<p style="text-align:center;color:#d4af37;margin-bottom:15px;">
${producto.precio}
</p>
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

botonesFiltro.forEach(btn=>{

btn.onclick=()=>{

botonesFiltro.forEach(b=>b.classList.remove("activo"));
btn.classList.add("activo");

const filtro = btn.dataset.filtro;

if(filtro==="todos"){
cargarProductos(productosData);
}else{
const filtrados = productosData.filter(p=>p.categoria===filtro);
cargarProductos(filtrados);
}

};

});

// ================= MODAL =================

const modal = document.getElementById("modalProducto");

const modalImg = document.getElementById("modalImg");
const modalNombre = document.getElementById("modalNombre");
const modalMaterial = document.getElementById("modalMaterial");
const modalPrecio = document.getElementById("modalPrecio");
const modalMedidas = document.getElementById("modalMedidas");
const modalDetalle = document.getElementById("modalDetalle");

const miniGaleria = document.getElementById("miniGaleria");

const btnConsultar = document.getElementById("btnConsultar");

function abrirModal(producto){

modal.style.display="flex";
document.body.style.overflow = "hidden";

modalImg.src = producto.imagenes[0];
modalImg.onerror = () => modalImg.src = "img/placeholder.jpg";

modalNombre.innerText = producto.nombre;
modalMaterial.innerText = producto.material;
modalPrecio.innerText = producto.precio;
modalMedidas.innerText = producto.medidas;
modalDetalle.innerText = producto.detalle;

miniGaleria.innerHTML = "";

producto.imagenes.forEach(img=>{

const mini = document.createElement("img");
mini.src = img;

mini.onclick = () => {
modalImg.src = img;
};

miniGaleria.appendChild(mini);

});

btnConsultar.onclick=()=>{

const mensaje = `Hola! 👋
Quiero consultar por:

🪑 ${producto.nombre}
💰 ${producto.precio}
📏 ${producto.medidas}

¿Está disponible?`;

const url="https://wa.me/5493416930606?text="+encodeURIComponent(mensaje);

window.open(url,"_blank");

};

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

menuToggle.addEventListener("click", () => {
menu.classList.toggle("active");
});

// cerrar menú al tocar link
document.querySelectorAll(".menu a").forEach(link=>{
link.addEventListener("click", ()=>{
menu.classList.remove("active");
});
});

// ================= PROMO =================

const promo = document.getElementById("promoPill");
const cerrarPromo = document.getElementById("cerrarPromo");

cerrarPromo.addEventListener("click", () => {
promo.style.display = "none";
});

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
"<span style='color:red;'>Ingresá una dirección válida</span>";
return;
}

// protección google
if (typeof google === "undefined" || !google.maps) {
document.getElementById("resultadoEnvio").innerHTML =
"<span style='color:red;'>Error cargando mapas</span>";
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
"<span style='color:red;'>Error al calcular distancia</span>";
return;
}

const data = response.rows[0].elements[0];

if(data.status !== "OK"){
document.getElementById("resultadoEnvio").innerHTML =
"<span style='color:red;'>No se pudo calcular</span>";
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
<strong style="color:red;">
🚫 No realizamos envíos a esa distancia.<br>
Escribinos por WhatsApp 😉
</strong>
</div>`;
return;
}

document.getElementById("resultadoEnvio").innerHTML = `
<div class="resultado-box">
<div class="fila" style="justify-content:center;">
<strong class="precio">🚚 Envío: $${costo}</strong>
</div>
</div>`;

});

});

// ================= AUTOCOMPLETE =================

function iniciarAutocomplete(){

const input = document.getElementById("direccionCliente");

autocomplete = new google.maps.places.Autocomplete(input, {
types: ["address"],
componentRestrictions: { country: "ar" }
});

}

window.addEventListener("load", iniciarAutocomplete);
// seleccionar secciones automáticamente
const elementos = document.querySelectorAll(
  "section, .envios, .footer"
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

function iniciarMapa(){

if (typeof google === "undefined") return;

const ubicacion = {
  lat: -33.032123,
  lng: -60.642987
};
console.log("Google:", google);
const mapa = new google.maps.Map(document.getElementById("mapaGoogle"), {
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

observerMapa.observe(mapaEl);
