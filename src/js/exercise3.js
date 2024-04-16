//ejercicio 3 
let listaNotas = []
let nota1 = parseFloat(prompt("Ingrese la primera nota del estudiante(en caso de ser decimal usar punto): "))
let nota2 = parseFloat(prompt("Ingrese la segunda nota del estudiante(en caso de ser decimal usar punto): "))
let nota3 = parseFloat(prompt("Ingrese la tercera nota del estudiante(en caso de ser decimal usar punto): "))
let nota4 = parseFloat(prompt("Ingrese la cuarta nota del estudiante(en caso de ser decimal usar punto): "))
let nota5 = parseFloat(prompt("Ingrese la quinta nota del estudiante(en caso de ser decimal usar punto): "))
let suma = parseFloat(0)
listaNotas.push(nota1, nota2, nota3, nota4, nota5)

for (let i = 0; i < listaNotas.length; i++)
    suma += listaNotas[i]

let promedio = suma / 5

if (promedio < 3) {
    console.warn("Usted acaba de ser reprobado, obtuvo un promedio de:", promedio)
    for (i = 0; i < listaNotas.length; i++)
        console.log("Nota ", [i + 1], ":", listaNotas[i])
}else {
    console.log("Usted acaba de ser aprobado, obtubo un promedio de:", promedio)
for (a = 0; a < listaNotas.length; a++)
    console.log("Nota ", [a + 1], ":", listaNotas[a])
}

