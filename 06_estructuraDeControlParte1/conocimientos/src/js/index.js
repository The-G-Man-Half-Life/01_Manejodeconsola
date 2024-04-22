console.groupCollapsed("ciclo for simple")
const listFruits = ["apple", "orange", "banana", "grape", "strawberry", "kiwi", "pineapple", "watermelon", "mango", "pear", "peach", "plum", "cherry", "blueberry", "raspberry", "blackberry", "lemon", "lime", "coconut", "pomegranate"]

console.info(listFruits.length)
console.table(listFruits)

for (let i = 0; i < listFruits.length; i++) {
    console.info(listFruits)
}
console.groupEnd()


console.groupCollapsed("ciclo for-each mas simple")
// console.table(listFruits)
// listFruits.forEach((fruit,index) => {
//     console.log(index+1,"->",fruit)
// })
//foreach with objects
const coderRiwi = {
    name: "javier",
    lastName: "combita tellez",
    height: 180,
    weight: 76,
    birthDate: new Date("23/04/1998"),
    id: "1096247488",
    country: "colombia",
    email: "javier.combita@riwi.io"
}

// console.table(coderRiwi)
// console.info(coderRiwi.email)

// console.info(object.keys(coderRiwi))
// console.info(object.values(coderRiwi))

Object.keys(coderRiwi).forEach(key => {
    console.info(coderRiwi[key])
})

listaEmpleados = [
    {
        nombre: "Juan Pérez",
        edad: 30,
        puesto: "Desarrollador de Software",
        salario: 50000
    },
    {
        nombre: "María García",
        edad: 28,
        puesto: "Diseñadora Gráfica",
        salario: 45000
    },
    {
        nombre: "Luis Ramírez",
        edad: 35,
        puesto: "Gerente de Proyectos",
        salario: 60000
    },
    {
        nombre: "Ana Martínez",
        edad: 32,
        puesto: "Analista de Negocios",
        salario: 55000
    }
];
listaEmpleados.forEach(empleado => {
    document.writeln(empleado.nombre)
    console.info(empleado.nombre)
})

for (const value of listFruits) {
    console.info(value)
}
console.groupEnd()

console.groupCollapsed("map")
console.group("map")
const listNumbers = [2, 5, 78, 4, 9]
const numeroMultiplicado = []

listNumbers.forEach(number => {
    console.info(`${number} X 2 = ${number * 2}`)

    numeroMultiplicado.push(number * 2)
})

const numeroMultiplicandoV2 = listNumbers.map(number=>{
    console.info(`${number}X2 ${number*2}`)

    return number * 2 
})

let lista100Numeros = []

for (let i = 1; i<=100; i++){
    lista100Numeros.push(i)
}

const numerosPares0A100 = lista100Numeros.map(number=>{
    if (number%2 ==0){
        return number
    }
    else if (number ==undefined){
        return
    }
})
console.log(numerosPares0A100);

console.groupEnd()