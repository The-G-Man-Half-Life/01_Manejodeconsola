// const Argentina = "Buenos Aires"
// const Bolivia = "Sucre"
// const Brasil = "Brasilia"
// const Chile = "Santiago de Chile"
// const Colombia = "Bogota"
// const Ecuador = "Quito"
// const Paraguay = "Asuncion"
// const Peru = "Lima"
// const Surinam = "Parabarimo"
// const TrinidadyTobago = "PuertoEspaña"
// const Uruguay = "Montevideo"
// const Venezuela = "Caracas"

//ejercicio 1
//variables

// let num1 = parseInt(prompt("Ingrese un numero natural: "))
// let num2 = parseInt(prompt("Ingrese otro numero natural: ")) 

// const suma = num1 + num2
// const resta = num1 - num2
// const multiplicacion = num1 * num2
// const division = num1/num2

// //llamado a las funciones
// console.info(`Al operar ${num1} con ${num2} se obtuvieron los siguientos resultados: Suma ${suma}, Resta ${resta}, Multiplicacion ${multiplicacion}, Division: ${division}`)
// console.error(`Al operar ${num1} con ${num2} se obtuvieron los siguientos resultados: Suma ${suma}, Resta ${resta}, Multiplicacion ${multiplicacion}, Division: ${division}`)
// console.warn(`Al operar ${num1} con ${num2} se obtuvieron los siguientos resultados: Suma ${suma}, Resta ${resta}, Multiplicacion ${multiplicacion}, Division: ${division}`)
// console.debug(`Al operar ${num1} con ${num2} se obtuvieron los siguientos resultados: Suma ${suma}, Resta ${resta}, Multiplicacion ${multiplicacion}, Division: ${division}`)
// console.table(`Al operar ${num1} con ${num2} se obtuvieron los siguientos resultados: Suma ${suma}, Resta ${resta}, Multiplicacion ${multiplicacion}, Division: ${division}`)
// console.log(`Al operar ${num1} con ${num2} se obtuvieron los siguientos resultados: Suma ${suma}, Resta ${resta}, Multiplicacion ${multiplicacion}, Division: ${division}`)

//ejercicio 2
//variables

// let fruits = ["orange","tangerine","lemon","lime","grapefruit","watermelon","melon","peach","apple","strawberry"]
// let citricFruits = ["orange","tangerine","lemon","lime","grapefruit"]
// let noCitricFruits = ["watermelon","melon","peach","apple","strawberry"]
// for (let i in fruits ) {
//      console.log(fruits[i]);
// }
// console.log("")

// console.table(citricFruits)
// console.table(noCitricFruits)

//ejercicio 3 
let listaNotas = []
let nota1 = parseFloat(prompt("Ingrese la primera nota del estudiante(en caso de ser decimal usar punto): "))
let nota2 = parseFloat(prompt("Ingrese la segunda nota del estudiante(en caso de ser decimal usar punto): "))
let nota3 = parseFloat(prompt("Ingrese la tercera nota del estudiante(en caso de ser decimal usar punto): "))
let nota4 = parseFloat(prompt("Ingrese la cuarta nota del estudiante(en caso de ser decimal usar punto): "))
let nota5 = parseFloat(prompt("Ingrese la quinta nota del estudiante(en caso de ser decimal usar punto): "))
let suma = parseFloat(0)
listaNotas.push(nota1,nota2,nota3,nota4,nota5)

for (let i =0; i<listaNotas.length; i++) suma+=listaNotas[i]
console.log(suma)