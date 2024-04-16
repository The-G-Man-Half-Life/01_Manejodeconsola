// ejercicio 1
// variables

let num1 = parseInt(prompt("Ingrese un numero natural: "))
let num2 = parseInt(prompt("Ingrese otro numero natural: ")) 

const suma = num1 + num2
const resta = num1 - num2
const multiplicacion = num1 * num2
const division = num1/num2

// llamado a las funciones
console.info(`Al operar ${num1} con ${num2} se obtuvieron los siguientos resultados: Suma ${suma}, Resta ${resta}, Multiplicacion ${multiplicacion}, Division: ${division}`)
console.error(`Al operar ${num1} con ${num2} se obtuvieron los siguientos resultados: Suma ${suma}, Resta ${resta}, Multiplicacion ${multiplicacion}, Division: ${division}`) 
console.warn(`Al operar ${num1} con ${num2} se obtuvieron los siguientos resultados: Suma ${suma}, Resta ${resta}, Multiplicacion ${multiplicacion}, Division: ${division}`)
console.debug(`Al operar ${num1} con ${num2} se obtuvieron los siguientos resultados: Suma ${suma}, Resta ${resta}, Multiplicacion ${multiplicacion}, Division: ${division}`)
console.table(`Al operar ${num1} con ${num2} se obtuvieron los siguientos resultados: Suma ${suma}, Resta ${resta}, Multiplicacion ${multiplicacion}, Division: ${division}`)
console.log(`Al operar ${num1} con ${num2} se obtuvieron los siguientos resultados: Suma ${suma}, Resta ${resta}, Multiplicacion ${multiplicacion}, Division: ${division}`)
