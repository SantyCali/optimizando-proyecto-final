const guardarStorage = (clave, valor) => {localStorage.setItem(clave, valor)};


const productos = [
{
    id:1,
    numero:"23",
    desc:"Sorteo",
    precio: 1000,
    img:'src/img/num-23.jpg',
    cantidad:1
},
{
    id:2,
    numero:"03",
    desc:"Sorteo",
    precio: 900,
    img:'src/img/num-03.jpg',
    cantidad:1
},
{
    id:3,
    numero:"06",
    desc:"Sorteo",
    precio: 800,
    img:'src/img/num-06.jpg',
    cantidad:1
},
{
    id:4,
    numero:"44",
    desc:"Sorteo",
    precio: 700,
    img:'src/img/num-44.jpg',
    cantidad:1
},
{
    id:5,
    numero:"07",
    desc:"Sorteo",
    precio: 850,
    img:'src/img/num-07.jpg',
    cantidad:1
},

];


for(const producto of productos){
    guardarStorage(producto.id, JSON.stringify(producto));
}



edad = prompt("Ingrese su edad");

/* Aca hago el uso del operador Ternario */
edad >= 18 ? alert("Podes entrar al sorteo") : alert("No podes entrar");



/* Botón para ver la hora en la que el usuario ingresó, usando el operador and */
let ingreso1 = document.getElementById("ingreso1");
let ingreso2 = edad >= 18 && new Date();

const boton6 = document.getElementById("boton6")

boton6.addEventListener('click', ()=> {
    alert(`Ingreso: ${ingreso2} Edad: ${edad}`)
})


/* Botón para poner el nombre usando el operador or */
let nombre = document.getElementById("nombre1");
const boton7 = document.getElementById("boton7")

boton7.addEventListener('click', ()=> {
   let nombre = prompt("Ingrese su nombre");
 alert(nombre || "El usuario no existe");   
 



//Objeto con Spread
let persona3 = {nombre: `${nombre}`, edad: `${edad}`}

let objPersona = {...persona3}
console.log(objPersona);
 
})


