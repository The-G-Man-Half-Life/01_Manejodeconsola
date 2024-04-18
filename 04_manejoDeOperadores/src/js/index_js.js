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
let variable9 = { "name": "javier", "lastName": "Combita", "edad": 26 }
let variable10 = function () {
    console.log("HOLA World")
}


console.log("variable1", typeof (variable1))

console.log("variable2", typeof (variable2))

console.log("variable3", typeof (variable3))

console.log("variable4", typeof (variable4))

console.log("variable5", typeof (variable5))

console.log("variable6", typeof (variable6))

console.log("variable7", typeof (variable7))

console.log("variable8", typeof (variable8))

console.log("variable9", typeof (variable9))

console.log("variable10", typeof (variable10))
console.groupEnd()

// OPERADORES ARITMETICOS
console.groupCollapsed("operadores aritmeticos")
let numero1 = 6
let numero2 = 8

let suma = numero1 + numero2
let resta = numero1 - numero2
let multiplicacion = numero1 * numero2
let division = numero1 / numero2
let potencia = numero1 ** numero2
let resto = numero2 % numero1



console.warn("Suma:", suma)

console.warn("Resta:", resta)

console.warn("Multiplicacion:", multiplicacion)

console.warn("Division:", division)

console.warn("Potenciacion: ", potencia)

console.warn("El restante, resto, residuo, modulo o lo que sobra de la division es: ", resto)
console.groupEnd()

//operadores de incremento y decremento

console.groupCollapsed("Operadores de incremento y decremento")

let numeroParaIncrementar = 0
console.info("Inicio: ", numeroParaIncrementar)

numeroParaIncrementar++
numeroParaIncrementar--
numeroParaIncrementar += 5

console.info("final: ", numeroParaIncrementar)

let numeroParaDecrementar = 50
console.info("Inicio: ", numeroParaDecrementar)

numeroParaDecrementar--
numeroParaDecrementar--
numeroParaDecrementar -= 20

console.log("Final: ", numeroParaDecrementar)
console.groupEnd()

//operadores logicos

console.groupCollapsed("Operadores logicos")

console.groupCollapsed("Operadores logicos && and")

console.log(2<1)

console.log(2<5 && 2>45)

console.log(2>1 && 10>6 && 100>89 && 5>1)//true

let usuario = "cucho"
let password = "password"

console.log(usuario=="cucho" && password == "1234")//false
console.groupEnd()

console.groupCollapsed("Operadores logicos or ||")

console.log(5<10 || 2<8)

console.log(50<100 || 6>3)

console.log(5>20 || 9<11 || "javier" == "javier")

console.log(4<10 || 2<60)

console.groupEnd()
console.groupCollapsed("Operadores logicos anidados")

console.log((4<10 && 2<60) || ("operador"=="Operador"))

console.log(4<10 && (2<60 || "Operador" == "operador"))

const usuarioAdmin = "admin"
const passwordAdmin = "password1234"
const rol = "junior"

console.log( usuarioAdmin == "admin" && passwordAdmin == "password1234") && (rol == "admin" || rol== "supervisor")//false

console.groupEnd()

console.groupCollapsed("Operador de negacion NOT (!)")
let variable = false 

console.log(!variable)
console.groupEnd()
console.groupCollapsed("operadores de igualdad")
//operadores de igualdad
// console.log(4==4)
// console.log(4=="4")
// console.log(4==="4")
// console.log(4===4)
console.groupEnd()

console.groupCollapsed("operador de diferencia ' != '")
//operador de diferencia "!="
// console.log(4 != 4)
// console.log(4 !="4")
// console.log(4 !== "4")
// console.log(4!==4)
console.groupEnd()

console.groupCollapsed("operador de menor que ' < '")
//operador de menor que "<"
// console.log(2 < 5)
// console.log(60 < 35)
// console.log(5 < 5)
// console.log(15 <= 15)
console.groupEnd()

console.groupCollapsed("Operador mayor que ' > '")
// console.log(2 > 5)
// console.log(60 > 35)
// console.log(5 > 5)
// console.log(15 >= 15)
console.groupEnd()
console.groupEnd()


