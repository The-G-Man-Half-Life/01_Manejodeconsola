//# Tipo de datos basico en javascript
console.groupCollapsed("tipo de datos en javascript")
let variable1 = 12
let variable2 = "4"
let variable3 = "Hola Mundo"
let variable4 = true
let variable5 = null
let variable6 = undefined
let variable7 = NaN
let variable8 = [1, 2, 3, 4, 5, 6]
let variable9 = {"name": "javier", "lastName":"Combita", "edad":26}
let variable10 = function(){
    console.log("HOLA World")
}


console.log("variable1", typeof(variable1))

console.log("variable2", typeof(variable2))

console.log("variable3", typeof(variable3))

console.log("variable4", typeof(variable4))

console.log("variable5", typeof(variable5))

console.log("variable6", typeof(variable6))

console.log("variable7", typeof(variable7))

console.log("variable8", typeof(variable8))

console.log("variable9", typeof(variable9))

console.log("variable10", typeof(variable10))
console.groupEnd()

// OPERADORES ARITMETICOS
console.groupCollapsed("operadores aritmeticos")
let numero1 = 6
let numero2 = 8

let suma = numero1+numero2
let resta = numero1-numero2
let multiplicacion = numero1*numero2
let division = numero1/numero2
let potencia = numero1**numero2
let resto = numero2%numero1



console.warn("Suma:",suma)

console.warn("Resta:",resta)

console.warn("Multiplicacion:",multiplicacion)

console.warn("Division:",division)

console.warn("Potenciacion: ",potencia)

console.warn("El restante, resto, residuo, modulo o lo que sobra de la division es: ",resto)
console.groupEnd()

//operadores de incremento y decremento

console.groupCollapsed("Operadores de incremento y decremento")

let numeroParaIncrementar = 0
console.info("Inicio: ", numeroParaIncrementar)

numeroParaIncrementar++
numeroParaIncrementar--
numeroParaIncrementar+=5

console.info("final: ", numeroParaIncrementar)

let numeroParaDecrementar = 50
console.info("Inicio: ", numeroParaDecrementar)

numeroParaDecrementar--
numeroParaDecrementar--
numeroParaDecrementar -= 20

console.log("Final: ",numeroParaDecrementar)
console.groupEnd()