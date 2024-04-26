
console.groupCollapsed("date")
let isDate = new Date()
console.log(isDate)
let isDate2 = new Date("10/26/2006 06:00:00")//mm/dd//yyyy no se puede usar mas para formar la hora
console.log(isDate2)
let isDate3 = new Date("2006/10/26")
console.log(isDate3)
console.groupEnd()

console.groupCollapsed("los getters")
//getter
let miliseconds = new Date().getMilliseconds()//escribe los milisegundos
console.log(miliseconds)
let second = new Date().getSeconds()//escribe los segundos
console.log(second)
let minute = new Date().getMinutes()//escribe los minutos
console.log(minute)
let hour = new Date().getHours()//escribe las horas
console.log(hour)
let dia = new Date().getDate() //me dice la fecha entre los dias de 1 a 31
console.log(dia)
let diaSemanal = new Date().getDay()// me dice el dia de la semana que corresponde
console.log(diaSemanal);
let mes = isDate.getMonth() // me dice el mes con un numero de 1 a 12
console.log(mes)
let año = isDate.getFullYear()//me escribe el año actual
console.log(año)
let getDate = new Date().getDate()
console.log(getDate)
let timeZone = new Date().getTimezoneOffset()
console.log(timeZone)

console.log(`La hora es ${new Date().getHours()}`)
console.groupEnd()

console.groupCollapsed("setter")
//setter
console.log("setter")
console.log(new Date().setDate(2, 4))
console.log(isDate.setFullYear(1996))
console.groupEnd()

console.groupEnd()

console.groupCollapsed("representacion de fechas")

console.log(new Date())
console.log(isDate.toDateString())
console.log(isDate.toLocaleDateString())
console.log(isDate.toISOString())
console.log(isDate.toJSON())

console.groupEnd()

console.groupCollapsed("ejercicio")
let fecha = new Date(prompt("Ingrese una fecha con el formato mm/dd/yyyy"))
let diaSemana = fecha.getDay()
console.log(diaSemana)
// switch (diaSemana) {
//     case 0:
//         console.log("El dia de la semana es Domingo")
//         break;
//     case 1:
//         console.log("El dia de la semana es Lunes")
//         break;
//     case 2:
//         console.log("El dia de la semana es Martes")
//         break;
//     case 3:
//         console.log("El dia de la semana es Miercoles")
//         break;
//     case 4:
//         console.log("El dia de la semana es Jueves")
//         break;
//     case 5:
//         console.log("El dia de la semana es viernes")
//         break;
//     case 6:
//         console.log("El dia de la semana es Sabado")
//         break;
//     default:
//         console.log("Este no es un dia valido")
//         break;
// }


console.groupEnd()