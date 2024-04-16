//ejercicio 1
let num1 = 2
let num2 = 4

console.error(num1+num2)

//ejercicio 2
let simpleString1 = "Hola"
let simpleString2 = "Mundo"

const lengthstring1 = simpleString1.length
const lengthstring2 = simpleString2.length

console.debug(`la longitud de simpleString1 es: ${lengthstring1}`)
console.debug(`la longitud de simpleString2 es: ${lengthstring2}`)

//ejercicio 3
let stringUsingString1 = String("javascript")
let stringUsingString2 = String("ejercicios")

//ejercicio 4
let stringUsingNewString1 = new String("Concatenar")
let stringUsingNewString2 = new String("Strings")

//ejercicio 5
let ubicationLa =(simpleString1.search("la"))
console.log(ubicationLa)

//ejercicio 6
let ubicationNdo = (simpleString2.search("ndo"))
console.warn(ubicationNdo)

//ejercicio 7
let concatSString1_2 = simpleString1.concat(simpleString2)
console.info(concatSString1_2)

//ejercicio 8
console.log(simpleString1 + simpleString2)

//ejercicio 9
let concatTemplateStrings = (`${simpleString1}${simpleString2}`)
console.error(concatTemplateStrings)

//ejercicio 10
let stringWithSpaces1 = "         TrimStart            "
let stringWithSpaces2 = "     TrimEnd                   "

let stringWithNoSpace1 = stringWithSpaces1.trim()
let stringWithNoSpace2 = stringWithSpaces2.trim()

console.warn(stringWithNoSpace1.concat(stringWithNoSpace2))

//ejercicio 11
let replaceOI = (simpleString1.replace("o","i"))
console.log(replaceOI)

//ejercicio 12
let simpleString2Slice = (simpleString2.slice(0,3))
console.log(simpleString2Slice)

//ejercicio 13
let simpleString2SString = (simpleString2.substring(2))
console.warn(simpleString2SString)

//ejercicio 14
let string = "Esto es una oración de ejemplo" 
let arrayString = (string.split(" "))

console.warn(arrayString)

//ejercicio 15
let simpleString2Upper = (simpleString2.toUpperCase())
console.debug(simpleString2Upper)

//ejercicio 16
let simpleString1Lower = (simpleString1.toLowerCase())
console.info(simpleString1Lower)

//ejercicio 17
let majo = false
console.info(typeof(majo))

//ejercicio 18
let arreglo = ["chepe", "john", "matt"]
console.debug(arreglo.length)

//ejercicio 19
let objeto = {Rusia:"Majo", Colombia:"Bogota", CostaRica:"San Jose"}
console.log(objeto.Colombia)

//ejercicio 20
let nulo = null
console.log(typeof(nulo))

//ejercicio 21
// let indefinido = 
// console.log(typeof(indefinido))

//ejercicio 22
let decimal = 2.5
console.log(typeof(decimal))

//ejercicio 23
let negativo = -22
console.log(typeof(negativo))

//ejercicio 24
let casa = "Casa"
console.log(casa.indexOf("a"))

//ejercicio 25
let javas = "javascript"
let javasInc = javas.includes("script")
console.warn(javasInc)

//ejercicio 26
console.error(simpleString1.concat(simpleString2))

//ejercicio 27
console.warn(simpleString1+simpleString2)

//ejercicio 28
console.debug(`${simpleString1}${simpleString2}`)

//ejercicio 29
let cadenaConEspacios = "Ejemplo con espacios"
let cadenaSinEspacios = cadenaConEspacios.trimStart().trimEnd()
console.warn(cadenaSinEspacios)

//ejercicio 30
let palabra =  "El cielo es azul"
let palabraRe = palabra.replace("azul","rojo")
console.warn(palabraRe)

//ejercicio 31
let palabra2 = "programacion"
let palabra2Sl = palabra2.slice(0,4)
console.warn(palabra2Sl) 

//ejercicio 32
console.debug(javas.substring(2))

//ejercicio 33
let palabra3 = "Hola"
console.error(palabra3.repeat(3))

//ejercicio 34
console.warn(arrayString)

//ejercicio 35
console.error(javas.toUpperCase())

//ejercicio 36
let palabra4 = "EJEMPLO"
console.info(palabra4.toLocaleLowerCase())

//ejercicio 37
let numero = 23
console.error(typeof(numero))

//ejercicio 38
let mariajose = true
console.error(typeof(mariajose))

//ejercicio 39
let arreglo2 = ["aña", "ig de la minita", "baculo"]
console.debug(arreglo2.length)

//ejercicio 40
let objeto2 = {a1:"odio", a2:"sangre", a3:"unicornios"}
console.error(objeto2.a1)

//ejercicio 41
let nulo2 = null
console.log(typeof(nulo2))

//ejercicio 42
// let indefinido = 
// console.log(typeof(indefinido))

//ejercicio 43
let decimal2 = 3.9
console.log(typeof(decimal2))