const productosData = [

{
nombre:"Mesa Manicura Estándar",
categoria:"manicura",
precio:"$90.000",
medidas:"80 x 40 x 80 cm",
detalle:"Mesa ideal para salón de belleza con superficie de vidrio",
imagenes:["img/mesa1.jpg","img/mesa1-2.jpg"]
},

{
nombre:"Mesa Manicura Premium",
categoria:"manicura",
precio:"$130.000",
medidas:"110 x 40 x 80 cm",
detalle:"Diseño moderno, con agregado de cajón, guias teléscopicas y tirador de cristal",
imagenes:["img/mesa2.jpg","img/mesa2-2.jpg"]
},


];


const contenedor = document.getElementById("productos");


function cargarProductos(lista){

contenedor.innerHTML="";

lista.forEach(producto=>{

const card = document.createElement("div");
card.classList.add("producto");

card.innerHTML=`
<img src="${producto.imagenes[0]}">
<h3>${producto.nombre}</h3>
`;

card.onclick=()=>abrirModal(producto);

contenedor.appendChild(card);

});

}


cargarProductos(productosData);



const botonesFiltro = document.querySelectorAll(".filtros button");

botonesFiltro.forEach(btn=>{

btn.onclick=()=>{

const filtro = btn.dataset.filtro;

if(filtro==="todos"){

cargarProductos(productosData);

}else{

const filtrados = productosData.filter(p=>p.categoria===filtro);

cargarProductos(filtrados);

}

};

});



const modal = document.getElementById("modalProducto");

const modalImg = document.getElementById("modalImg");
const modalNombre = document.getElementById("modalNombre");
const modalPrecio = document.getElementById("modalPrecio");
const modalMedidas = document.getElementById("modalMedidas");
const modalDetalle = document.getElementById("modalDetalle");

const miniGaleria = document.getElementById("miniGaleria");

const btnConsultar = document.getElementById("btnConsultar");


function abrirModal(producto){

modal.style.display="flex";

modalImg.src = producto.imagenes[0];
modalNombre.innerText = producto.nombre;
modalPrecio.innerText = producto.precio;
modalMedidas.innerText = producto.medidas;
modalDetalle.innerText = producto.detalle;

miniGaleria.innerHTML="";

producto.imagenes.forEach(img=>{

const mini=document.createElement("img");
mini.src=img;

mini.onclick=()=>{

modalImg.src=img;

};

miniGaleria.appendChild(mini);

});

btnConsultar.onclick=()=>{

const mensaje="Hola, quiero consultar por: "+producto.nombre;

const url="https://wa.me/5493412735681?text="+encodeURIComponent(mensaje);

window.open(url,"_blank");

};

}


document.querySelector(".cerrar").onclick=()=>{

modal.style.display="none";

};
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {

menu.classList.toggle("active");

});
const promo = document.getElementById("promoPill");
const cerrarPromo = document.getElementById("cerrarPromo");

cerrarPromo.addEventListener("click", () => {
promo.style.display = "none";
});