// var y let al momento de usarse para variables se pueden iterar 
// var userName = prompt("ingrese su nombre:")
// let surname = prompt("Ingrese su apellido:")
// const no es iterable por lo que al momento de generar otra variable con el mismo nombre aparecera error en la consola
// const age = prompt("Ingrese su edad:")
// let phone = prompt("Ingrese su numero de celular:")
// const email = prompt("Ingrese su email:")
// let address = prompt("Ingrese su direccion de residencia:")


// console.group("Data User:")

// console.log("Su nombre es: " + userName) //con console.log puedo aparecer mensajes tras debidas interacciones
// console.error("Su apellido es: " + surname) //con console.error puedo hacer mensajes que avisan acciones no permitidas tras debidas interacciones
// console.warn("Su edad es: " + age) //con console.warn genero advertencias para el usuario al momento de recibir cierto tipo de datos que se pueden mejorar

// console.groupEnd()
// alert(name)
// alert(surname)
// alert(age)


// console.group("Contact Data User")

// console.debug("Su numero de celular es: " + phone) //con console.debug se verifica si es que cierto tipo de dato corresponde a uno previamente establecido
// console.info("Su email es: " + email) //con console.info se provee de informacion a la persona que lo este letendo
// console.assert("Su direccion es: " + address) //con console.assert puede imprimirse un resultado dada cierta condicion

// console.groupEnd()

// alert(phone)
// alert(email)
// alert(address)


// const header = `
// <header>
// <h1>
//     Bienvenido, <strong>${userName} ${surname}</strong>. Con edad: 
// </h1>
// <p>
//     su email es: ${email}, su direccion es: ${address} y su celular es: 
// </p>
// </header>
// `

// console.log("Fullname: " + userName + " " + surname + " Age: " + age + " Phone: " + phone + " Email: " + email + " Address: " + address)
// console.warn("Fullname:", userName, surname, "Age:", age, "Phone:", phone, "email:", email, "Address:", address)
// console.error(`Fullname: ${userName} ${surname} Age: ${age} Phone: ${phone} email: ${email} Address: ${address}`)


// listCodersGates=["Lupe Ortiz", "Mario Zapata", "Pedro Pascal"]

// console.info(listCodersGates)
// console.table(listCodersGates)

// alert(listCodersGates)
// const text = "amogus"
// const text2 = "SUS"

// console.info(text.toLowerCase())//esta se encarga de colocar todas las letras en minuscula
// console.info(text.toUpperCase().concat(text2.toLowerCase()))//esta se encarga de colocar todas las letras en mayuscula
// document.write(text)


//buscar informacion

// const mensaje = "            hola                  mundo                 "
// const mensaje2 = "aguacate"

// console.log(mensaje.startsWith("familia"))
// console.log(mensaje.includes("mundo"))
// console.info(mensaje.endsWith("hola"))

// console.log(mensaje.trimStart()) esta elimina el espacio en el inicio
// console.log(mensaje.trimEnd()) esta elimina el espacio al final
// console.log(mensaje.trim().concat(mensaje2)) esta elimina el espacio al inicio y al final


// const mensaje = "soy un coder de riwi , y en riwi soy feliz "
// document.write(mensaje)
// console.info(mensaje)
// console.info(mensaje.replace("coder","programador"))
// console.info(mensaje.replaceAll("riwi", "centro de entrenamiento"))
// console.info(mensaje.replace(/[aeou]/g, "i"))
// console.info(mensaje.replaceAll(" ", ""))
// console.info(mensaje.repeat(2))

// relleno de strings
//al usar los "pad" se agregara el elemento indicado en el cajon con la finalidad de que se obtenga la cantidad de cajones indicados
// const mensaje = "123"
// document.write(mensaje)
// console.info(mensaje.padEnd(5,"*"))
// console.info(mensaje.padStart(5,"*"))


//fragmentar un string

//const mensaje = "ser un coder de riwi cambia tu mundo"
////document.write(mensaje)
//console.info(mensaje.substring(0,12))//esta linea de codigo se encarga de extraer cierta parte de una variable desde el elemento que se ubica desde el inicio hasta el elemento final indicado despues de la coma
//console.info(mensaje.substring(13))//esta linea de codigo se encarga de mostrar cierta parte de una variable desde el elemento ubicado en la posicion indicada hasta el final de toda la variable
//
//let mensajeRecortado = (mensaje.slice(0,12))// con el slice ademas de obtener la parte deseada de un string la puedo reconocer como una variable luego algo lo que no puede hacer substring
//console.info(mensajeRecortado)
//console.info(mensaje.slice(13))
//
//console.log(mensaje.split(" ")) //con el split separo cada uno de los elementos de un string acorde a un elemento comun para separarlos
//console.log(mensaje.split("e"))
//console.log(mensaje.split("e",2))

const text = "el amongus es demasiado sus"

console.info(text.search("amongus"))