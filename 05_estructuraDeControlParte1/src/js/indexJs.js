console.groupCollapsed("Condiciones simple")
//condicionales simples

const nombre = "Juan";

if (nombre == "Juan") {
    console.log("Hola " + nombre);
}

const edad = 18

if (edad >= 18) {
    console.log("Eres mayor de edad y puedes votar")
}
console.groupEnd()
console.groupCollapsed("Condiciones If Else")
//condiciones if else

const edadMinimaParaBeber = 18
const miEdad = 18

if ((miEdad < edadMinimaParaBeber) && (miEdad > 0)) {
    console.warn("Estas cometiendo una infraccion debes de ser asesinado")
}
else {
    console.warn("Puedes beber pero cuidate del ejercito")
}


if (false) {
    console.log("Opcion verdadera")
}
else {
    console.log("Opcion falso")
}
console.groupEnd()
console.groupCollapsed("Condiciones if else")


// const usuarioInput = String(prompt("Ingrese su nombre de usuario"))
// const password = parseInt(prompt("Ingrese su contraseña"))

// const usuarioVerdadero = "admin"
// const passwordVerdadero = 12345

// if ((usuarioInput ==usuarioVerdadero) && (password==passwordVerdadero)){
//     console.log("Tanto su usuario como contraseña son verdaderos puede acceder a nuestra pagina")

// }
// else if ((usuarioInput!=usuarioVerdadero)&&(password==passwordVerdadero)){
//     console.warn("El usuario es falso pero la contraseña es verdadera")
// }
// else if ((usuarioInput==usuarioVerdadero)&&(password!=passwordVerdadero)){
//     console.warn("El usuario es verdadero pero la contraseña es falsa")
// }
// else{
//     console.warn("Tanto usuario como contraseña son falsos no puede acceder a nuestra web")
// }

// let numeroAleatorio = Math.floor(Math.random()*(20-1+1)+1)
// if (numeroAleatorio === 0){
//     console.log("El numero es neutro")
// }
// else if(numeroAleatorio<10){
//     console.log("El numero es menor a 10")
// }
// else if(numeroAleatorio<20){
//     console.log("El numero es menor a 20")
// }
// else{
//     console.log("El numero es 20")
// }

// let numeroAleatorio = Math.floor(Math.random()*(5-(-5)+1)+(-5))
// if (numeroAleatorio === 0){
//     console.log("El numero es neutro")
// }
// else if(numeroAleatorio==0){
//     console.log("El numero es menor a 10")
// }
// else if(numeroAleatorio<0){
//     console.log("El numero es negativo")
// }
// else{
//     console.log("El numero es positivo")
// }

// let medioDeTransporte = String(prompt("Cómo viaja hacia Riwi"))

// let medioDeTransportex = medioDeTransporte.toLowerCase()

// if(medioDeTransportex == "pie"){
//     console.log("Tu viajas a pie")
// }
// else if (medioDeTransportex == "bicicleta"){
//     console.log("Tu viajas en bicicleta")
// }
// else if (medioDeTransportex == "moto" || medioDeTransportex == "motocicleta"){
//     console.log("Tu viajas en moto")
// }
// else if (medioDeTransportex == "metro"){
//     console.log("Tu viajas en metro")
// }
// else if (medioDeTransportex == "lamborgini"){
//     console.log("Tu viajas en lamborgini")
// }
// else{
//     console.log("Tu viajas en un medio de transporte extraño");
// }
// console.groupEnd()
// console.groupCollapsed("Caso switch")
// switch(medioDeTransporte){
//     case "pie":
//         console.log("Tu viajas a pie")
//         break
//     case "pie":
//         console.log("Tu viajas en bicicleta")
//         break
//     case "pie":
//         console.log("Tu viajas en moto")
//         break
//     case "pie":
//         console.log("Tu viajas en metro")
//         break
//     case "pie":
//         console.log("Tu viajas en lamborgini")
//         break
//     default:
//         console.log("Tu viajas en un medio de transporte extraño");
//         break
// }

// let dispositivoElectronico = String(prompt(`
// 1.Tablet
// 2.Celular
// 3.Smart Watch
// 4.Computador
// 5.Laptop

// Ingrese el nombre de su dispositivo electronico favorito`))
// let x = dispositivoElectronico.toLowerCase()


// switch (x) {
//     case "tablet":
//         console.log("Usted usa tablet")
//         break
//     case "celular":
//         console.log("Usted usa celular")
//         break
//     case "smart watch":
//         console.log("Usted usa smart watch")
//         break
//     case "computador":
//         console.log("Usted usa computador")
//         break
//     case "laptop":
//         console.log("Usted usa laptop")
//         break
//     default:
//         console.log("Usted no programa o usa un dispositivo muy raro")
//         break

// }
// let armas = parseInt(prompt(`[Menu de armas]

// [1]Escopeta de doble cañon: $5000
// [2]Rifle de asalto AK-47: $8000
// [3]Subfusil Thompson: $3000
// [4]Ametralladore liviana Minigun: $1000000

// Ingrese el numero del arma que desa comprar:`)
// )

// let presupuesto = parseInt(prompt("Ingrese su presupuesto para la compra:"))

// if ((armas==1) && (presupuesto>=5000)){
//     console.log(`Tenga aqui su arma. Su restante es:$${presupuesto-5000}`)
// }

// else if ((armas==2) && (presupuesto>=8000)){
//     console.log(`Tenga aqui su arma. Su restante es:$${presupuesto-8000}`)
// }
// else if ((armas==3) && (presupuesto>=3000)){
//     console.log(`Tenga aqui su arma. Su restante es:$${presupuesto-3000}`)
// }
// else if ((armas==4) && (presupuesto>=1000000)){
//     console.log(`Tenga aqui su magnifica minigun. Su restante es:$${presupuesto-1000000}`)
// }
// else{
//     console.warn("No le alcanza el dinero vuelva cuando tenga suficiente")
// }
console.groupEnd()

console.groupCollapsed("Ciclos for")
//imprimir los numeros del 1 al 10
// for (let i = 1; i<= 10; i++){
//     console.log(`Este es el numero:${i}`)
// }

//imprimir los numeros del 20 al 5000
// for (let i = 20; i<= 5000; i++){
//     console.log(`Este es el numero:${i}`)
// }

// for (let i = 1; i <11; i++){
//     console.log(`2 veces ${i} es igual a:${2*i}`)
// }

console.groupEnd()
// console.groupCollapsed("Ciclo while")
let numero = 0
while((numero)<(1)){
    console.log("hola mundo")
    numero++
}
console.groupEnd()
