console.groupCollapsed("Ejercicio 1");
// Ejercicio 1
// const numero1 = Number(prompt("Ingrese un numero cualquiera"))
// const numero2 = Number(prompt("Ingrese otro numero cualquiera"))

// let comparacionValores = undefined

// let operacionCaso1 = (numero1) - (numero2)
// let operacionCaso2 = (numero2) - (numero1)

// if (numero1 > numero2) {
//     comparacionValores = true
// }
// else {
//     comparacionValores = false
// }

// if (comparacionValores == true) {
//     console.log(`El resultado de la operacion es ${numero1}-${numero2}: ${operacionCaso1}`)
//     if (operacionCaso1 < 0) {
//         console.log("El resultado de la operacion es negativo")
//     }
//     else {
//         console.log("El resultado de la operacion es positiva")
//     }
// }
// else {
//     console.log(`El resultado de la operacion es ${numero2}-${numero1}: ${operacionCaso2}`)
//     if (operacionCaso2 < 0) {
//         console.log("El resultado de la operacion es negativo")
//     }
//     else {
//         console.log("El resultado de la operacion es positiva")
//     }
// }


console.groupEnd();

console.groupCollapsed("Ejercicio 2");
// Ejercicio 2
// let opcion = prompt(`[Ingrese el numero o el nombre de las siguientes operaciones]

// 1.Suma
// 2.Resta
// 3.Multiplicacion
// 4.Division
// 5.Potencia
// 6.Raiz`)
// let numero3 = Number(prompt("Ingrese un numero cualquiera"))
// let numero4 = Number(prompt("Ingrese otro numero cualquiera"))


// let opcionSwitch = undefined

// if (opcion == "1" || opcion == "2" || opcion == "3" || opcion == "3" || opcion == "4" || opcion == "5" || opcion == "6") {
//     opcionSwitch = Number(opcion)
// }
// else {
//     opcionSwitch = opcion.toLowerCase()
// }

// switch (opcionSwitch) {
//     case 1:
//         console.log(`Su resultado de la suma de ${numero3} y ${numero4}:${Number.parseFloat(Math.round(numero3 + numero4))}`)
//         break;
//     case "suma":
//         console.log(`Su resultado de la suma de ${numero3} y ${numero4}:${Number.parseFloat(Math.round(numero3 + numero4))}`)
//         break;
//     case 2:
//         console.log(`Su resultado de la resta de ${numero3} y ${numero4}:${Number.parseFloat(Math.round(numero3 - numero4))}`)
//         break;
//     case "resta":
//         console.log(`Su resultado de la resta de ${numero3} y ${numero4}:${Number.parseFloat(Math.round(numero3 - numero4))}`)
//         break;
//     case 3:
//         console.log(`Su resultado de la multiplicacion de ${numero3} y ${numero4}:${Number.parseFloat(Math.round(numero3 * numero4))}`)
//         break;
//     case "multiplicacion":
//         console.log(`Su resultado de la multiplicacion de ${numero3} y ${numero4}:${Number.parseFloat(Math.round(numero3 * numero4))}`)
//         break;
//     case 4:
//         console.log(`Su resultado de la division de ${numero3} y ${numero4}:${Number.parseFloat(Math.round(numero3 / numero4))}`)
//         break;
//     case "division":
//         console.log(`Su resultado de la division de ${numero3} y ${numero4}:${Number.parseFloat(Math.round(numero3 / numero4))}`)
//         break;
//     case 5:
//         console.log(`Su resultado de la potencia de ${numero3} y ${numero4}:${Number.parseFloat(Math.round(Math.pow(numero3, numero4)))}`)
//         break;
//     case "potencia":
//         console.log(`Su resultado de la potencia de ${numero3} y ${numero4}:${Number.parseFloat(Math.round(Math.pow(numero3, numero4)))}`)
//         break;
//     case 6:
//         console.log(`Su resultado de la raiz de ${numero3} y ${numero4}:${Number.parseFloat(Math.round(Math.sqrt(numero3, numero4)))}`);
//         break;
//     case "raiz":
//         console.log(`Su resultado de la raiz de ${numero3} y ${numero4}:${Number.parseFloat(Math.round(Math.sqrt(numero3, numero4)))}`);
//         break;
//     default:
//         break;
// }
console.groupEnd();

console.groupCollapsed("Ejercicio 3");
// Ejercicio 3
// let numeroMultiplicarTabla = Number(prompt("Ingrese un numero para saber su tabla de multiplicar"))

// for (let i = 1; i<=10;i++){
//     let multiplicacion = i*numeroMultiplicarTabla
//     let multiplicacionString = multiplicacion.toString()
//     console.log(`${i}.${numeroMultiplicarTabla} veces ${i} es igual a:`,multiplicacionString)
// }
console.groupEnd();

console.groupCollapsed("Ejercicio 4");
// Ejercicio 4
// let edad = Number(prompt("Ingrese su edad actual"))
// let horasSueño = Number(prompt("Ingrese la cantidad de horas de sueño"))

// let recienNacidoE = edad==0
// let bebeE = edad==1
// let niñoPequeñoE = edad<=2 && edad>=1
// let InfanteE = edad>=3 && edad<=5
// let edadEscolarE = edad>=6 && edad<=13
// let adolescenteE = edad>=14 && edad<=17
// let adultosE = edad>=18 

// let recienNacidoS = horasSueño>=14 && horasSueño<=17
// let bebeS = horasSueño>=12 && horasSueño<=15
// let niñoPequeñoS = horasSueño>=11 && horasSueño<=14
// let InfanteS = horasSueño>=10 && horasSueño<=13
// let edadEscolarS = horasSueño>=9 && horasSueño<=11
// let adolescenteS = horasSueño>=8 && horasSueño<=10
// let adultosS = horasSueño>=7 && horasSueño<=9


// if (recienNacidoE==true && recienNacidoS==true){
//     console.log("usted se encuentra durmiendo el tiempo suficiente para su edad")
// }
// else if (bebeE==true && bebeSS==true){
//     console.log("usted se encuentra durmiendo el tiempo suficiente para su edad")
// }
// else if (niñoPequeñoE==true && niñoPequeñoS==true){
//     console.log("usted se encuentra durmiendo el tiempo suficiente para su edad")
// }
// else if (InfanteE==true && InfanteS==true){
//     console.log("usted se encuentra durmiendo el tiempo suficiente para su edad")
// }
// else if (edadEscolarE==true && edadEscolarS==true){
//     console.log("usted se encuentra durmiendo el tiempo suficiente para su edad")
// }
// else if (adolescenteE==true && adolescenteS==true){
//     console.log("usted se encuentra durmiendo el tiempo suficiente para su edad")
// }
// else if (adultosE==true && adultosS==true){
//     console.log("usted se encuentra durmiendo el tiempo suficiente para su edad")
// }
// else{
//     console.warn("Usted no se encuentra durmiendo lo suficiente vayase a mimir mas temprano")
// }
console.groupEnd();

console.groupCollapsed("Ejercicio 5");
// Ejercicio 5
// let diaSemana = String(prompt("Ingrese un dia de la semana para saber si es laboral o de descanso"))
// let diaSemanaAlt = diaSemana.toLowerCase()

// let mensajeCombinado = "Este es un dia de trabajo Este es un dia de descanso"
// let mensajeDLaboral = mensajeCombinado.slice(0,25)

// let mensajeDDescanso =mensajeCombinado.substring(26,52)


// if (diaSemana=="lunes"||diaSemana=="martes"||diaSemana=="miercoles"||diaSemana=="jueves"||diaSemana=="viernes"){
//     console.log(mensajeDLaboral)
// }
// else if (diaSemana=="sabado"||diaSemana=="domingo"){
//     console.log(mensajeDDescanso)
// }
// else{
//     console.error("Este no es un dia de la semana tonoto")
// }
console.groupEnd();

console.groupCollapsed("Ejercicio 6");
// Ejercicio 6
// let numeroInput = Number(prompt("Ingrese un numero cualquiera"))
// let numeroInputAlt = Math.round(numeroInput)
// let sumaNumerosImpares = 0
// for (let i= numeroInputAlt; i>=0; i--){
//     if (i%2!=0){
//         sumaNumerosImpares +=i
//     }
// }
// console.log("la suma de los numeros impares previos a",numeroInputAlt, "es:",sumaNumerosImpares-numeroInputAlt)
console.groupEnd();

console.groupCollapsed("Ejercicio 7");
// Ejercicio 7
// let numeroInput2 = Number(prompt("Ingrese un numero decimal"))

// if (Number.isInteger(numeroInput2)==true){
//     console.warn("ingresa un numero decimal no un entero")
// }
// else{
//     let numeroInput2FAndInteger = Number.parseInt(Math.floor(numeroInput2))
//     console.log("Su numero redondeado y entero es:",numeroInput2FAndInteger)
// }
console.groupEnd();

console.groupCollapsed("Ejercicio 8");
// Ejercicio 8
// let palabraInput3 = String(prompt("Ingrese una frase aleatoria"))
// let menuOpciones = Number.parseInt(prompt(`seleccion una opcion para hacer algo con la frase:
// [1].Convertir las letras de la frase a mayusculas
// [2].Convertir las letras de la frase a minusculas
// [3],convertir los espacios por guiones inferiores`))

// switch (menuOpciones) {
//     case 1:
//         console.log(palabraInput3.toUpperCase())
//         break;
//     case 2:
//         console.log(palabraInput3.toLowerCase())
//         break;
//     case 3:
//         let espaciosGuiones = palabraInput3.replaceAll(" ","_")
//         console.log(espaciosGuiones)
//         break;
//     default:
//         console.log("Escoje una opcion correcta tonoto")
//         break;
// }
console.groupEnd();

console.groupCollapsed("Ejercicio 9");
// Ejercicio 9
// let palabraInput3 = String(prompt("Ingrese una frase aleatoria"))
// let palabraInputNueva = ""

// for (let i = palabraInput3.length; i>=0; i--){
//     if (i%2==0){
//         palabraInputNueva += palabraInput3.charAt(i).toLowerCase()

//     }
//     else{
//         palabraInputNueva += palabraInput3.charAt(i).toUpperCase()
//     }
// }
// console.log(palabraInputNueva.split("").reverse().join(","))
console.groupEnd();
