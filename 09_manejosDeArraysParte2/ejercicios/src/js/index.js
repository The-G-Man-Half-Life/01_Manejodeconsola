console.groupCollapsed("Ejercicio 1");
// Ejercicio 1
const nombres = ["Mariajose Pino Ortega",
    "Johnatan Escobar Molina",
    "Sebastian Ortiz Castro",
    "Arlex Mauricio Zapata",
    "Julian Felipe Forero Villa",
    "Herbin Esteban Restrepo Isaza",
    "Juan Guillermo Ruiz Alvarez",
    "Luisa Fernanda Ramirez Cardona",
    "David Steven Alvarez Urrego",
    "Juan Esteban Quirama Lopez"]

const nombresOrganizados = nombres.sort()
console.log(nombresOrganizados)
console.groupEnd();

console.groupCollapsed("Ejercicio 2");
// Ejercicio 2
const arrayNumerico = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
]
console.groupEnd();

console.groupCollapsed("Ejercicio 3");
// Ejercicio 3
let sumaNumeros = 0

for (let i = 0; i < arrayNumerico.length; i++) {
    sumaNumeros += arrayNumerico[i]
}
console.log(sumaNumeros)
console.groupEnd();

console.groupCollapsed("Ejercicio 4");
// Ejercicio 4
const nombresObjetos = {
    "Mariajose Pino Ortega": "Gato",
    "Johnatan Escobar Molina": "Juguete",
    "Sebastian Ortiz Castro": "Sardina",
    "Arlex Mauricio Zapata": "Ataque",
    "Julian Felipe Forero Villa": "Joroba",
    "Herbin Esteban Restrepo Isaza": "Herramienta",
    "Juan Guillermo Ruiz Alvarez": "Jinete",
    "Luisa Fernanda Ramirez Cardona": "Luciernaga",
    "David Steven Alvarez Urrego": "Adrenalina",
    "Juan Esteban Quirama Lopez": "Jugador"
}

for (const key in nombresObjetos) {
    console.log(key)
    console.log(nombresObjetos[key])
}
console.groupEnd();

console.groupCollapsed("Ejercicio 5");
// Ejercicio 5
let sumaNumeros2 = 0
for (const numero of arrayNumerico) {
    sumaNumeros2 += numero
}
console.log(sumaNumeros2)
console.groupEnd();

console.groupCollapsed("Ejercicio 6");
// Ejercicio 6
nombres.forEach(nombre => {
    console.log(nombre)
});
console.groupEnd();

console.groupCollapsed("Ejercicio 7");
// Ejercicio 7
arrayNumericoMultiplicado2 = arrayNumerico.map((numero) => {
    return numero * 2
})
console.log(arrayNumericoMultiplicado2)
console.groupEnd();

console.groupCollapsed("Ejercicio 8");
// Ejercicio 8
arrayNumericoFiltradoPares = arrayNumerico.filter((numero) => {
    if (numero % 2 == 0) {
        return numero
    }
})

console.log(arrayNumericoFiltradoPares)
console.groupEnd();

console.groupCollapsed("Ejercicio 9");
// Ejercicio 9
const numeros2 = [
    -50,
    -200,
    -500,
    -600,
    -700,
    -800,
    -901,
    -902,
    -903,
    -900,
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900,
    1
]
let verificacionNumerosMayoresA100 = numeros2.some(numero => numero >= 100)
console.log(verificacionNumerosMayoresA100)
console.groupEnd();

console.groupCollapsed("Ejercicio 10");
// Ejercicio 10
let verificacionNumerosPositivosNegativos = numeros2.every((numero)=>numero>0)
console.log(verificacionNumerosPositivosNegativos)
console.groupEnd();

console.groupCollapsed("Ejercicio 11");
// Ejercicio 11
let numerosOrdenados = numeros2.sort()//este metodo no sirve pa numeros ta pendejo
console.log(numerosOrdenados)


console.groupEnd();

console.groupCollapsed("Ejercicio 12");
// Ejercicio 12
let numeros2Invertidos = numeros2.reverse()
console.log(numeros2Invertidos)
console.groupEnd();

console.groupCollapsed("Ejercicio 13");
// Ejercicio 13
// function arrayToReversed(array) {
//     let arrayReversado = array.toReversed()
//     console.log(arrayReversado)
// }
// arrayToReversed(nombres)
console.groupEnd();

console.groupCollapsed("Ejercicio 14");
// Ejercicio 14
let sumaNumeros3 = 0

numeros2.forEach((numero)=>{
    sumaNumeros3 +=numero
})
console.log(sumaNumeros3)
console.groupEnd();

console.groupCollapsed("Ejercicio 15");
// Ejercicio 15
    // if (typeof(nombresObjetos[key]) == String){
    //     cantidadDeElementosString++
    // }
let cantidadDeElementosString = 0
for (const key in nombresObjetos) {
    if(typeof(nombresObjetos[key])){
        cantidadDeElementosString++
    }
}
console.log(cantidadDeElementosString)
console.groupEnd();

console.groupCollapsed("Ejercicio 16");
// Ejercicio 16
nombres.forEach((nombre)=>{
    console.log(nombre)
})
console.groupEnd();

console.groupCollapsed("Ejercicio 17");
// Ejercicio 17
nombresLongitud = nombres.map((nombre)=>{
    let nombreLongitud = nombre.length
    return nombreLongitud
})
console.log(nombresLongitud)
console.groupEnd();

console.groupCollapsed("Ejercicio 18");
// Ejercicio 18
nombreConLetraA = nombres.filter((nombreA)=>{
    if(nombreA.includes("a")==true){
        return nombreA
    }
})
console.log(nombreConLetraA)
console.groupEnd();

console.groupCollapsed("Ejercicio 19");
// Ejercicio 19
let verificacionLongitud = nombres.some(nombres=>nombres.length>10)

console.log(verificacionLongitud)
console.groupEnd();

console.groupCollapsed("Ejercicio 20");
// Ejercicio 20
// let verificacionVocal = nombres.every((nombre)=>nombre.includes("a"||"A"||"e"||"E"||"i"||"I"||"o"||"O"||"u"||"U"))
// console.log(verificacionVocal)
console.groupEnd();

console.groupCollapsed("Ejercicio 21");
// Ejercicio 21
let libros = [
    {titulo:"Don Quijote de la Mancha",creador:"Miguel de Cervantes Saavedra",paginas:863},
    {titulo:"Guerra y Paz",creador:"Lev Tolstói",paginas:1440},
    {titulo:"Cien años de soledad",creador:"Gabriel Garcia Marquez",paginas:422},
    {titulo:"Mody Dick",creador:"Herman Melville",paginas:720},
    {titulo:"El señor de los anillos: La cominidad del anillo",creador:"J.R.R. Tolkien",paginas:458},
    {titulo:"Anna Karenina",creador:"Lev Tolstói",paginas:864},
    {titulo:"En busca del tiempo perdido",creador:"Marcel Proust",paginas:400},
    {titulo:"El gran Gatsby",creador:"F. Scottt Fitzgerald",paginas:180},
    {titulo:"Ulises",creador:"James Joyce",paginas:730},
    {titulo:"La Odisea",creador:"Homero",paginas:400}
]
let maxPages= Number(500)
let librosMasDe500Paginas = []
for(let i = 0;i<=libros.length;i++){
    if(Number(libros[i].paginas)>maxPages){
        librosMasDe500Paginas.push(libros[i])
    }
}

console.log(librosMasDe500Paginas)

console.groupEnd();

console.groupCollapsed("Ejercicio 22");
// Ejercicio 22
let numerosDivisiblesPor3 = numeros2.filter((numero)=>{
    if(numero%3 == 0){
        return numero
    }
})
console.log(numerosDivisiblesPor3)
console.groupEnd();

console.groupCollapsed("Ejercicio 23");
// Ejercicio 23
let nombresLongitudMayor5 = nombres.filter((nombre)=>{
    if(nombre.length>5){
        return nombre
    }
})
console.log(nombresLongitudMayor5)
console.groupEnd();

console.groupCollapsed("Ejercicio 24");
// Ejercicio 24

console.groupEnd();

console.groupCollapsed("Ejercicio 25");
// Ejercicio 25
console.groupEnd();

console.groupCollapsed("Ejercicio 26");
// Ejercicio 26
console.groupEnd();

console.groupCollapsed("Ejercicio 27");
// Ejercicio 27
console.groupEnd();

console.groupCollapsed("Ejercicio 28");
// Ejercicio 28
console.groupEnd();

console.groupCollapsed("Ejercicio 29");
// Ejercicio 29
console.groupEnd();

console.groupCollapsed("Ejercicio 30");
// Ejercicio 30
console.groupEnd();