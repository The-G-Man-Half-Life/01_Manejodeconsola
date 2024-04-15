// var y let al momento de usarse para variables se pueden iterar 
var userName= prompt("ingrese su nombre:")
let surname = prompt("Ingrese su apellido:")
// const no es iterable por lo que al momento de generar otra variable con el mismo nombre aparecera error en la consola
const age= prompt("Ingrese su edad:")

console.group("Data User:")

console.log("Su nombre es: " + userName) //con console.log puedo aparecer mensajes tras debidas interacciones
console.error("Su apellido es: " + surname) //con console.error puedo hacer mensajes que avisan acciones no permitidas tras debidas interacciones
console.warn("Su edad es: " + age) //con console.warn genero advertencias para el usuario al momento de recibir cierto tipo de datos que se pueden mejorar

console.groupEnd()
// alert(name)
// alert(surname)
// alert(age)


let phone = prompt("Ingrese su numero de celullar:")
const email = prompt("Ingrese su email:")
let address = prompt("Ingrese su direccion de residencia:")

console.group("Contact Data User")

console.debug("Su numero de celular es: " + phone) //con console.debug se verifica si es que cierto tipo de dato corresponde a uno previamente establecido
console.info("Su email es: " + email) //con console.info se provee de informacion a la persona que lo este letendo
console.assert("Su direccion es: " + address) //con console.assert puede imprimirse un resultado dada cierta condicion

console.groupEnd()

// alert(phone)
// alert(email)
// alert(address)


console.log("Fullname: " + userName + " " + surname + " Age: " + age + " Phone: " + phone + " Email: " + email + " Address: " + address)
console.warn("Fullname:", userName, surname, "Age:", age, "Phone:", phone, "email:", email, "Address:", address)
console.error(`Fullname: ${userName} ${surname} Age: ${age} Phone: ${phone} email: ${email} Address: ${address}`)


listCodersGates=["Lupe Ortiz", "Mario Zapata", "Pedro Pascal"]

console.info(listCodersGates)
console.table(listCodersGates)

// alert(listCodersGates)