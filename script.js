console.log("hola")
let variableCambiante = "hola";
const variableQueNoCambia = "NoCambia";

let simbolo = Symbol('unico');

let moto = {
    marca: "kawasaki",
    cilindraje: 259,
    valor: 1200000
}

//Array
let motos = ["nkd", "crypton"];

//Concatenar

let texto1 = "hola como estas"
let texto2 = "bien y tu";
let texto1y2 = '${texto1},${texto2}'



//switch
let parametro = "uvas"

switch (parametro) {
    case "naranjas":
        console.log("no es")
        break
    case "uvas":
        console.log("si es")
        break
    default:
        console.log("no se")
        break
}
let contador=0
while (contador<10){
    console.log(contador)
    contador++;
}

do {
    console.log(contador)
    contador++
}while(contador<10)

//ciclo for
let lista=["comer","salir","saludar"]

for(let i=0; i<lista.length;i++){
    console.log(lista[i])
}

for (caracts in moto){
    console.log(caracts + " : " + moto[caracts])  
} 


//funciones

function calcular(precio,descuento){
    let precioFinal =precio-(precio*descuento)
    return precioFinal
}

const precioOriginal=129;
const descuento = 0.05

let precioFnal2=calcular(precioOriginal,descuento)
console.log(precioFnal2)