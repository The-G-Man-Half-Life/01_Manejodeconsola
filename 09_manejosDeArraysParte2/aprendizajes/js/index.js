// const objetoAleatorio = {
//     nombre: "Mateo",
//     comidas: "Papas",
//     apellido: "Montoya"
// }
// Object.assign(objetoAleatorio,{madre: "Blanca", padre: "Roman"})

// console.log(objetoAleatorio)

// Object.defineProperty(objetoAleatorio,"comidas",{
//     value:"Papas"

// })

// const arrayOriginal  = [1,2,3,1,2,2,3,4,4,5]
// let arrayfiltrado = []

// for(let i = 0;i<arrayOriginal.length;i++){
//     let element = arrayOriginal[i]
//     let encontrado = false
//     for (let j = 0; j< arrayfiltrado.length; j++){
//         let element2 = arrayfiltrado[j]
//         if ( element === element2){
//             encontrado = true

//         }
//     }
//     if (encontrado===false){
//         arrayfiltrado.push(element)
//     }
// }

// console.log(arrayOriginal)
// console.log("antes-despues")
// console.log(arrayfiltrado)

console.groupCollapsed("reversed y toReversed")
// let array1 = [1,2,3,4,5,6,7,8,9,10,]

// let array2 = array1.map(function(item){
//     return item*2
// })

// let array1Reversed = array1.reverse()
// let array2ToReversed = array2.Toreversed();

// console.log(array1)
// console.log(array1Reversed);
// console.log(array2);
// console.log(array2ToReversed);


// const frutas = [
//     "mango",
//     "manzana",
//     "pitaya",
//     "banana",
//     "tomate",
//     "aguacate"
// ]

// let frutasR = []
// frutasR = frutas.reverse()

// // let frutasRM =frutasR.map((fruta)=>{
// //         return fruta.toUpperCase()
// // })

// let frutasRM = frutasR.map(function (fruta) {
//     return fruta.toUpperCase()
// })


// console.log(frutasRM)

console.groupEnd()

console.groupCollapsed("sort y sorted")

// let listaDesordenada = ["Diego","Pablo","Juan Pablo"]
// let listaOrdenada = listaDesordenada.sort()
// console.log(listaOrdenada)

// let listaNumericaDesordenada = [1,-56, 12,6.1,9.88]
// let listaNumericaOrdenada = listaNumericaDesordenada.toSorted()

console.groupEnd()

console.groupCollapsed("for each ")

// let listaNumerica = [1,2,3,4,5,6,7,8,9,10]
// listaNumerica.forEach((numero)=>{
//     console.log(numero)
// })

// let listaCoders = ["maria","pablo","lucas","diego"]
// listaCoders.forEach(function (coder,index) {
//     console.log(`El coder: ${coder} esta en la posicion ${index+1}`)
// })


// for (const iterator of listaCoders) {
//     console.log(iterator);
// }
// for (const key in listaNumerica) {
//     console.log(parseInt(key)+1);
// }
console.groupEnd()

console.groupCollapsed("every")

// let numeros = [55, 88, 111, 66, 11, 99, 22, 7, 4, 5]

// let respuesta = numeros.every(numero => numero>0)
// console.log(respuesta)

// let verificacionPar = numeros.every(numero => numero===Number)
// console.log(verificacionPar)

console.groupEnd()

console.groupCollapsed("some")

// let nombres = ["lucas", "maria", "pablo"]

// let checkNombre = nombres.some(nombre => nombre === "pedro")
// console.log(checkNombre)


// let usuarios = ["pedrito1234", "juanitoTactico", "XXXProGameXXX", "mateo2626_TheBest"]

// let usuarioInput = String(prompt("Ingrese su nombre de usuario"))

// let verificacion = usuarios.some(usuario => usuario == usuarioInput)

// if( verificacion== false){
//     console.log("Su usuario no esta dentro de la base de datos")
// }
// else{
//     console.log("su usuario esta dentro de la base de datos")
// }



console.groupEnd()

console.groupCollapsed("filter")

// let numerosAValidar = [1,2,3,4,5,6,7,8,9,10]
// let numerosPares = []
// let numerosImpares = []

// for (let i = 0 ; i< numerosAValidar.length;i++){

//     if (numerosAValidar[i]%2==0){
//         numerosPares.push(numerosAValidar[i])
//     }
//     else{
//         numerosImpares.push(numerosAValidar[i])
//     }
// }

// console.log(numerosPares)
// console.log(numerosImpares)

// const numeroAleatorios = [1,2,3,4,5,6,7,8,9,10]

// let numeroAleatoriosPares = numeroAleatorios.filter((numero)=>{
//     if (numero%2 == 0){
//         return numero
//     }
// })

// let numeroAleatoriosImpares = numeroAleatorios.filter((numero)=>{
//     if (numero%2 != 0){
//         return numero
//     }
// })


// console.log(numeroAleatoriosPares)
// console.log(numeroAleatoriosImpares)

console.groupEnd()