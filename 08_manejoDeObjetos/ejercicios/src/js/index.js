console.groupCollapsed("Ejercicio 1");
// Ejercicio 1
const frutas =[
    "Horned melon",
    "Rambutan",
    "Kiwano",
    "Durian",
    "Mangosteen",
    "Dragon Fruit",
    "Sweet Cucumber",
    "Starfruit",
    "Devil's Grape",
    "Blood Orange"
]
console.groupEnd();

console.groupCollapsed("Ejercicio 2");
// Ejercicio 2
// for(let i=0; i<frutas.length;i++){
//     console.log(i,".",frutas[i])
// }
console.groupEnd();

console.groupCollapsed("Ejercicio 3");
// Ejercicio 3
// frutas.forEach((fruta,index)=>{
//     console.log( `${index}. ${fruta.toUpperCase()}`)
// })
console.groupEnd();

console.groupCollapsed("Ejercicio 4");
// Ejercicio 4
const numeros =[
    1, 
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
]
console.groupEnd();

console.groupCollapsed("Ejercicio 5");
// Ejercicio 5
// let flag = numeros
// let counter = 0

// console.log(numeros.indexOf(1))

// while(counter<numeros.length){
//     console.log(numeros[counter])
//     counter ++
// }
console.groupEnd();

console.groupCollapsed("Ejercicio 6");
// Ejercicio 6
// frutas.push("papaya")
// console.log(frutas)
console.groupEnd();

console.groupCollapsed("Ejercicio 7");
// Ejercicio 7
// delete numeros[1]
// console.log(numeros)
console.groupEnd();

console.groupCollapsed("Ejercicio 8");
// Ejercicio 8
// frutas.reverse()
// console.log(frutas)
console.groupEnd();

console.groupCollapsed("Ejercicio 9");
// Ejercicio 9
numeros.reverse()
// console.log(numeros)
console.groupEnd();

console.groupCollapsed("Ejercicio 10");
// Ejercicio 10
// let frutaInput = String(prompt("write the name of a fruit"))
// let frutaInput2 = frutaInput.toLowerCase()

// function buscarFruta(frutaInput2) {
//     for (let i = 0; i<=frutas.length;i++){
//         if (frutaInput2!=frutas[i]){
//             continue
//         }
//         else{
//             console.log(frutaInput, "se encuentra dentro del array de frutas")
//         }
//     }
    
// }
// buscarFruta()
console.groupEnd();

console.groupCollapsed("Ejercicio 11");
// Ejercicio 11
// console.log(frutas[0])
console.groupEnd();

console.groupCollapsed("Ejercicio 12");
// Ejercicio 12
// console.log(numeros.length)
// console.log(numeros[9])
console.groupEnd();

console.groupCollapsed("Ejercicio 13");
// Ejercicio 13
// let frutas1 = frutas.map((fruta)=>{
//     return [fruta]
// })
// frutas1.forEach((frutaIncrustada) => {
//     console.log(frutaIncrustada)
// });
console.groupEnd();

console.groupCollapsed("Ejercicio 14");
// Ejercicio 14
// let contador = 0
// for (const numero of numeros) {
//     console.log(numeros[contador])
//     contador++
// }
console.groupEnd();

console.groupCollapsed("Ejercicio 15");
// Ejercicio 15
// let duplicados = numeros.map((numeroDuplicar)=>{
//     return numeroDuplicar*2
// })
// console.log(duplicados)
console.groupEnd();

console.groupCollapsed("Ejercicio 16");
// Ejercicio 16
const array1 = [1,
2,
3]
const array2 = [4,
5,
6]

console.groupEnd();

console.groupCollapsed("Ejercicio 17");
// Ejercicio 17
// sumaArray1 = 0
// sumaArray2 = 0

// for(let i = 0;i<array1.length;i++){
//     sumaArray1 += array1[i]
// }
// for(let i = 0;i<array1.length;i++){
//     sumaArray2 += array2[i]
// }
// console.log(sumaArray1)
// console.log(sumaArray2)
console.groupEnd();

console.groupCollapsed("Ejercicio 18");
// Ejercicio 18

// let numeroAleatorio = Math.floor(Math.random()*(100-1+1)+1)
// function buscarNumeros(numero,numeros) {
//     if(numeros.includes(numero)==true){
//         console.log(`El numero ${numero} esta dentro de la lista`)
//     }
//     else{
//         console.log(`El numero ${numero} no esta dentro de la lista`)
//     }   
// }

// buscarNumeros(numeroAleatorio,numeros)
console.groupEnd();

console.groupCollapsed("Ejercicio 19");
// Ejercicio 19
const edades = [
    17,19,26,35,61
]
console.groupEnd();

console.groupCollapsed("Ejercicio 20");
// Ejercicio 20
// const mayoresDeEdad = edades.filter((edad)=>{
//     if (edad>=18){
//         return edad
//     }
// })
// console.log(mayoresDeEdad)
console.groupEnd();

console.groupCollapsed("Ejercicio 21");
// Ejercicio 21
const precios = [
    12_000_000,
    20_000_000,
    15_000_000
]
console.groupEnd();

console.groupCollapsed("Ejercicio 22");
// Ejercicio 22
// const preciosConIVA = precios.map((precioU)=>{
//     let precioIva = precioU+((precioU*21)/(100))
//     return precioIva
// })
// console.log(preciosConIVA)
console.groupEnd();

console.groupCollapsed("Ejercicio 23");
// Ejercicio 23
const duplicado = [
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13
]
console.groupEnd();





console.groupCollapsed("Ejercicio 24");
// Ejercicio 24    
let noDuplicados = []
// for (let i = 0;i<duplicado.length;i++){
//     if(!noDuplicados.includes(duplicado[i])){
//         noDuplicados.push(duplicado[i])
//     }
// }
// console.log(noDuplicados)

// duplicado.forEach((numeroD,index)=>{
//     if(noDuplicados.includes(numeroD)!=true){
//         noDuplicados.push(duplicado[index])
//     }
// })
// console.log(noDuplicados) 
    
console.groupEnd();





console.groupCollapsed("Ejercicio 25");
// Ejercicio 25
array3 = [
    "Majo","Johnatan","Mateo"
]
array4 = [
    "Roman", "Blanca Ines", "Paulina"
]
console.groupEnd();

console.groupCollapsed("Ejercicio 26");
// Ejercicio 26
// arrayUnido34 = array3.concat(array4)
// console.log(arrayUnido34)
console.groupEnd();

console.groupCollapsed("Ejercicio 27");
// Ejercicio 27
const colores = [
    "Amarillo",
    "Azul",
    "Rojo",
    "Verde",
    "Naranja",
    "Purpura"
]
console.groupEnd();

console.groupCollapsed("Ejercicio 28");
// Ejercicio 28
// console.log(colores.length)
console.groupEnd();