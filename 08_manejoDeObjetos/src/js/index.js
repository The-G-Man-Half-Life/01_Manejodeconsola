console.groupCollapsed("create")
const arraySimple = [1, "alfa",
    true,
    [2, 3, 5, 6],
    {
        name: "Mateo",
        lastName: "Montoya Ospina"
    },
    false]

const arraySimple2 = []
const arraySimple3 = Array("uno", "dos", "tres")
const arraySimple4 = new Array(3)
arraySimple4[1] = "uno"

console.info(arraySimple)
console.info(arraySimple2)
console.info(arraySimple3)
console.info(arraySimple4)


const option1 = Array.from(arraySimple[4].name)
const option2 = arraySimple[4].name.split("")
console.log(option1)
console.log(option2)


const alphabet = ["a", "b", "c", "d", "e", "f", "g"]
console.log(alphabet[6])
console.log(alphabet[-1])
console.log(alphabet.at(6))
console.log(alphabet.at(-1))

alphabet[0] = "alpha"
alphabet[1] = "bravo"

alphabet.push("h")
alphabet.push("i")
alphabet.push("j")

alphabet.unshift(1)
alphabet.unshift(2)
alphabet.unshift(3)

console.log(alphabet)

alphabet.pop()
alphabet.pop()
alphabet.pop()
const letraEliminada = alphabet.pop()
console.log(letraEliminada)

alphabet.shift()
const numeroEliminado = alphabet.shift()
console.log(numeroEliminado)

delete alphabet[2]

alphabet[15] = "tango"
alphabet[7] = "e"


console.log(typeof(alphabet))
console.log(alphabet)
console.log(alphabet.indexOf("zulu"))
console.log(alphabet.indexOf("e",2))

// Object.keys(arraySimple[4]).forEach((element,index) => {
//     console.log(`${index}. ${arraySimple[4][element]}`)
// });
console.groupEnd()
console.groupCollapsed("Union de arrays")

const clanGate = ["david","luisa","simon"]
const clanGosling = ["mariana", "kevin", "david"]

const nuevoClan = 
console.groupEnd()

console.groupCollapsed("Recorrer arrays")
console.groupCollapsed("ejercicio")
const numeros = [
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

let numerosUnidos = (numeros.join(","))

let numerosSeparados = (numerosUnidos.split(","))

console.log(numerosSeparados.map(numero => parseInt(numero)))


console.groupEnd()