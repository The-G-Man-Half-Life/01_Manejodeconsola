console.groupCollapsed("creacion de funciones clasicas")

// function saludarCoders(nombreCoder,clanCoder) {
//     alert(`Hola, ${nombreCoder} del clan ${clanCoder}`)
//     console.log(`Hola, ${nombreCoder} del clan ${clanCoder}`)
// }
// function despedirCoder(nombreCoder,clanCoder){
//     alert(`Adios, ${nombreCoder} del clan ${clanCoder}`)
//     console.log(`Adios, ${nombreCoder} del clan ${clanCoder}`)
// }
// let nombre = prompt("Ingrese su nombre")
// let clan = prompt("Ingrese el nombre de su clan")

// saludarCoders(nombre,clan)
// despedirCoder(nombre,clan)

function sumarDosNumeros(numero1,numero2) {
    let respuesta = (`la suma de ${numero1} y ${numero2} es: ${numero1+numero2}`)
    console.log((`la suma de ${numero1} y ${numero2} es: ${numero1+numero2}`))
    return respuesta
}

let primeraSuma = sumarDosNumeros(10,20)

sumarDosNumeros(-4,-8)

console.log(primeraSuma)
console.groupEnd()

console.groupCollapsed("creacion de funciones expresivas")
const mostrarUnHolaMundoEx  = function () {
    console.log("!Hola mundo¡")
}
mostrarUnHolaMundoEx()
console.groupEnd()

console.groupCollapsed("creacion de funciones declarativas")
function mostrarUnHolaMundo() {
    console.log("!Hola mundo¡")
}
mostrarUnHolaMundo()
console.groupEnd()

console.groupCollapsed("")