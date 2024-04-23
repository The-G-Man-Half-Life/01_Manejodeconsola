console.groupCollapsed("Ejercicio 1");
// Ejercicio 1
const persona = {
    nombre : "MariaJose",
    edad : 19,
    ciudad : "Medellin"
}
console.log(persona)
console.groupEnd();

console.groupCollapsed("Ejercicio 2");
// Ejercicio 2
persona.ocupacion = "Estudiante"
console.log(persona)
console.groupEnd();

console.groupCollapsed("Ejercicio 3");
// Ejercicio 3
console.error(persona.ocupacion)
console.groupEnd();

console.groupCollapsed("Ejercicio 4");
// Ejercicio 4
const libro = {
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    añoDePublicacion: new Date ("06/04/1943")
}
console.groupEnd();

console.groupCollapsed("Ejercicio 5");
// Ejercicio 5
const informacion ={...persona,...libro}
console.error(informacion) 
console.groupEnd();

console.groupCollapsed("Ejercicio 6");
// Ejercicio 6
persona.ocupacion = "Lider del tercer Reich"
console.log(persona)
console.groupEnd();

console.groupCollapsed("Ejercicio 7");
// Ejercicio 7
delete libro.autor
console.error(libro)
console.groupEnd();

console.groupCollapsed("Ejercicio 8");
// Ejercicio 8
const coche = {
    seguridad : "Avanzada",
    EficienciaCombustible : "Limitada",
    Rendimiento : "Sobresaliente",
    ConfortComodidad : "Lujoso",
    FlexibilidadDurabilidad : "Cautivadora",
    TecnologiaYCaracteristicasAvanzadas : "Innovador",
    Diseño : "Deslumbrante",
    PrecioVentaYReventa : 13_390_272_000,
    modelo : 2016,
    marca : "Bugatti",
    año : "2016"
}
console.log(coche)
console.groupEnd();

console.groupCollapsed("Ejercicio 9");
// Ejercicio 9
console.log(coche)
console.groupEnd();

console.groupCollapsed("Ejercicio 10");
// Ejercicio 10
coche.saludo = function() {
    console.log("Este es el mejor coche del mundo")
};

coche.saludo()
console.groupEnd();

console.groupCollapsed("Ejercicio 11");
// Ejercicio 11
const circulo = {
    radio : 60,
    color : "Rojo"
}
console.groupEnd();

console.groupCollapsed("Ejercicio 12");
// Ejercicio 12
let areaCirculo = ((Math.PI)*(Math.pow(circulo.radio,2)))
console.log("El area del circulo con radio",circulo.radio,"es",Math.ceil(areaCirculo))
console.groupEnd();

console.groupCollapsed("Ejercicio 13");
// Ejercicio 13
const rectangulo = {
    ancho : 40,
    alto : 80
}

console.groupEnd();

console.groupCollapsed("Ejercicio 14");
// Ejercicio 14
let perimetro = 2 * (rectangulo.ancho+rectangulo.alto)
console.warn("El perimetro de nuestro rectangulo es:",perimetro)
console.groupEnd();

console.groupCollapsed("Ejercicio 15");
// Ejercicio 15
const formas = {...rectangulo,...circulo}
console.log(formas)
console.groupEnd();

console.groupCollapsed("Ejercicio 16");
// Ejercicio 16
const computadora = {
    marca : "HP",
    modelo :2024,
    precio : 12_000_000
}
console.log(computadora)
console.groupEnd();

console.groupCollapsed("Ejercicio 17");
// Ejercicio 17
console.error(computadora.precio)
console.groupEnd();

console.groupCollapsed("Ejercicio 18");
// Ejercicio 18
// computadora.ExistenciaTarjetaGrafica = function () {
//     let tieneONo = prompt("Tiene el pc Tarjeta grafica")
//     return console.log(tieneONo)
// }
// computadora.ExistenciaTarjetaGrafica()
console.groupEnd();

console.groupCollapsed("Ejercicio 19");
// Ejercicio 19
const mascota = {
    nombre : "Panqueka",
    especie : "Zorro",
    edad : 6
}
console.table(mascota)
console.groupEnd();

console.groupCollapsed("Ejercicio 20");
// Ejercicio 20
console.log(mascota.especie.toUpperCase())
console.groupEnd();

console.groupCollapsed("Ejercicio 21");
// Ejercicio 21
const fruta = {
    nombre : "Banano",
    color : "Azul"
}
console.log(fruta)
console.groupEnd();

console.groupCollapsed("Ejercicio 22");
// Ejercicio 22
fruta.Estado = function(){
    console.log("La fruta esta como un adolescente, inmadura")
}
fruta.Estado()
console.groupEnd();

console.groupCollapsed("Ejercicio 23");
// Ejercicio 23
const estudiante = {
    nombre : "Marc",
    edad : 20,
    calificaciones : {
        ciencias : 5,
        matematicas : 4.8,
        sociales : 3,
        artisticas : 5
    }
}
console.groupEnd();

console.groupCollapsed("Ejercicio 24");
// Ejercicio 24
let sumaNotas = (estudiante.calificaciones.ciencias)+(estudiante.calificaciones.matematicas)+(estudiante.calificaciones.sociales)+(estudiante.calificaciones.artisticas)
let promedio = sumaNotas/4
let promedio2 = promedio.toFixed(1)
console.log(`El promedio del estudiante ${estudiante.nombre} es ${promedio2}` )
console.groupEnd();

console.groupCollapsed("Ejercicio 25");
// Ejercicio 25
estudiante.aprobacion =function(){
    if (promedio2>=4.5){
    console.log("El estudiante ha aprobado")
}
else{
    console.log("El estudiante ha perdido")
}
}
estudiante.aprobacion()

console.groupEnd();

console.groupCollapsed("Ejercicio 26");
// Ejercicio 26
const bolsa = {
    tamaño : "Grande",
    color : "Morada"
}
console.groupEnd();

console.groupCollapsed("Ejercicio 27");
// Ejercicio 27
console.log(`La bolsa tiene un tamaño: ${bolsa.tamaño}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 28");
// Ejercicio 28
bolsa.color = "Verde"
console.log(bolsa.color)
console.groupEnd();

console.groupCollapsed("Ejercicio 29");
// Ejercicio 29
const telefono = {
    marca : "Samsung",
    modelo : "Samsung A22",
    sistemaOperativo : "Android"
}
console.groupEnd();

console.groupCollapsed("Ejercicio 30");
// Ejercicio 30
console.log("El sistema operativo del celular",telefono.modelo,"es:",telefono.sistemaOperativo)
console.groupEnd();

console.groupCollapsed("Ejercicio 31");
// Ejercicio 31
telefono.ram = "32GB"
console.log(telefono.ram)
console.groupEnd();

console.groupCollapsed("Ejercicio 32");
// Ejercicio 32
const animal = {
    tipo : "Mamifero",
    sonido : "I pull up Capibara"
}
console.table(animal)
console.groupEnd();

console.groupCollapsed("Ejercicio 33");
// Ejercicio 33
console.error(`El ${animal.tipo} capibara hace el sonido:${animal.sonido}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 34");
// Ejercicio 34
animal.tipoSonido = function(){
    console.log(`El capibara que es ${animal.tipo} hace el sonido: ${animal.sonido}`)
}
animal.tipoSonido()
console.groupEnd();

console.groupCollapsed("Ejercicio 35");
// Ejercicio 35
const vuelo = {
    aeroLinea : "Avianca",
    NumeroDeVuelo : "180",
    horaDeSalida : "14:00:00"
}
console.log(vuelo)
console.groupEnd();

console.groupCollapsed("Ejercicio 36");
// Ejercicio 36
console.log(`La aerolinea ${vuelo.aeroLinea} tiene el numero de vuelo ${vuelo.NumeroDeVuelo}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 37");
// Ejercicio 37
vuelo.DestinoDelVuelo = "Corea Del Norte"
console.error(vuelo.DestinoDelVuelo)
console.groupEnd();

console.groupCollapsed("Ejercicio 38");
// Ejercicio 38
const jugador = {
    nombre : "Anthony",
    equipo : "Real Madrid",
    posicion : "Delantero"
}
console.log(jugador)
console.groupEnd();

console.groupCollapsed("Ejercicio 39");
// Ejercicio 39
console.debug(`El jugador ${jugador.nombre} del equipo ${jugador.equipo}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 40");
// Ejercicio 40
jugador.mensajePosicion = function () {
    console.log(`Su posicion es: ${jugador.posicion}`)
}
jugador.mensajePosicion()
console.groupEnd();