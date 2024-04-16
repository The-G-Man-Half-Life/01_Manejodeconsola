// Declaracion de strings

let comillasSimples = 'hola "mundo"'
let comillasDobles = "hola 'mundo'" //esta es la opcion ideal las comillas dobles contienen las comillas simples
//let stringTemporal =  holamundo; esta sintaxis es erronea debido a que sin comillas no se entiende que es un string
const fullName = "Mateo Montoya Ospina" 
const cantidadDeCaracteres = fullName.length //con el .length se puede calcular la cantidad de caracteres en una variable

//todas estas variable son de caracter string independientemente de sus diferencias
const mensaje1 = "soy un"
// const mensaje2 = string("hola")
// const mensaje3 = new string("mundo")


//Extraccion de caracteres
let extraccionDeLetraC = fullName[7]
let extraccionDeLetraCV2 = fullName.charAt(7)


// console.log (fullName[7]) //tambien puedo llamar directamente al caracter usando el console
// console.log(extraccionDeLetraC)
// console.warn(extraccionDeLetraCV2)


let nombre= "Mateo"
let apellido = "Montoya"
let correo = "mateomoospina@gmail.com"

const header = `
<header>
<h1>
    Hola mundo 
</h1>
<p>
    Mi nombre es: ${nombre} ${apellido} y mi correo es: ${correo}
</p>
</header>
`
// console.info ("Hola mundo, mi nombre es " +nombre+" " +apellido+ " y mi correo es "+correo)
// console.info ("Hola mundo, mi nombre es: ", nombre , apellido, "y mi correo es", correo)
// console.info (`Hola mundo, mi nombre es: ${nombre} ${apellido} y mi correo es: ${correo}`)

document.write(header)