
let datos;
fetch("travel.json").then(r=>r.json()).then(d=>datos=d);
function tarjeta(x){
return `<div class='card'><h3>${x.nombre}</h3><p>${x.descripcion}</p><img src='${x.imagenes[0]}'><img src='${x.imagenes[1]}'></div>`;
}
function buscar(){
const q=document.getElementById('search').value.toLowerCase();
let out='';
if(q.includes('playa')||q.includes('beach')) datos.playas.forEach(x=>out+=tarjeta(x));
if(q.includes('templo')) datos.templos.forEach(x=>out+=tarjeta(x));
datos.paises.forEach(x=>{if(q.includes(x.nombre.toLowerCase())) out+=tarjeta(x);});
document.getElementById('results').innerHTML=out||'<p>Sin resultados.</p>';
}
function limpiar(){document.getElementById('search').value='';document.getElementById('results').innerHTML='';}
