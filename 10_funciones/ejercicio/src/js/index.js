//nombre:Mateo Montoya Ospina
//clan:Gates
//Dia de inicio: 26 de Abril de 2024

//lista en donde guardo las mascotas
let mascotas = [

    {
        nombre: "Luna",
        especie: "Perro",
        raza: "Pastor Belga Malinois",
        edad: 5,
        peso: 25,
        estado: "Estable",
        "nombre propietario": "María García",
        "documento del dueño": 1122334455,
        "telefono de contacto": 555_1234_5678,
        "correo del propietario": "maria_garcia@amogus.com"
    },

    {
        nombre: "Max",
        especie: "Gato",
        raza: "Sphynx",
        edad: 6,
        peso: 7,
        estado: "Critico",
        "nombre propietario": "Alejandro Martínez",
        "documento del dueño": 2233445566,
        "telefono de contacto": 555_2345_6789,
        "correo del propietario": "alejandro_martinez@amogus.com"
    },

    {
        nombre: "Bella",
        especie: "Conejo",
        raza: "Angora",
        edad: 3,
        peso: 4,
        estado: "Estable",
        "nombre propietario": "Sofía Rodríguez",
        "documento del dueño": 3344556677,
        "telefono de contacto": 555_3456_7890,
        "correo del propietario": "sofia_rodrigue@amogus.com"
    },

    {
        nombre: "Rocky",
        especie: "Hurón",
        raza: "Hurón de patas negras",
        edad: 2,
        peso: 12,
        estado: "Critico",
        "nombre propietario": "Carlos López",
        "documento del dueño": 4455667788,
        "telefono de contacto": 555_4567_8901,
        "correo del propietario": "carloz_lopez@amongus.com"
    },

    {
        nombre: "Coco",
        especie: "Perico",
        raza: "Cotorra Argentina",
        edad: 4,
        peso: 0.5,
        estado: "Estable",
        "nombre propietario": "Ana Pérez",
        "documento del dueño": 5566778899,
        "telefono de contacto": 555_5678_9012,
        "correo del propietario": "ana_perez@amongus.com"
    },

    {
        nombre: "Simba",
        especie: "Serpiente",
        raza: "Pitón real",
        edad: 7,
        peso: 3,
        estado: "Critico",
        "nombre propietario": "Juan Hernández",
        "documento del dueño": 6677889900,
        "telefono de contacto": 555_6789_0123,
        "correo del propietario": "juan_hernandez@amongus.com"
    },

    {
        nombre: "Lola",
        especie: "Cerdo",
        raza: "Mini cerdo Vietnamita",
        edad: 6,
        peso: 15,
        estado: "Estable",
        "nombre propietario": "Laura Díaz",
        "documento del dueño": 7788990011,
        "telefono de contacto": 555_7890_1234,
        "correo del propietario": "laura_diaz@amongus.com"
    },

    {
        nombre: "Toby",
        especie: "Tortuga",
        raza: "Tortuga de orejas rojas",
        edad: 3,
        peso: 2,
        estado: "Critico",
        "nombre propietario": "Pablo Gómez",
        "documento del dueño": 7788990011,
        "telefono de contacto": 555_8901_2345,
        "correo del propietario": "pablo_gomez@amongus.com"
    },

    {
        nombre: "Daisy",
        especie: "Hurón",
        raza: "Hurón europeo"
        , edad: 3
        , peso: 8,
        estado: "critico",
        "nombre propietario": "Andrea Ruiz",
        "documento del dueño": 9900112233,
        "telefono de contacto": 555_9012_3456,
        "correo del propietario": "andrea_ruiz@amongus.com"
    },

    {
        nombre: "Charlie",
        especie: "Conejo"
        , raza: "Conejo Cabeza de león"
        , edad: 2
        , peso: 6,
        estado: "critico"
        , "nombre propietario": "David Fernández",
        "documento del dueño": 9911223344,
        "telefono de contacto": 555_0123_4567,
        "correo del propietario": "david_fernandez@amongus.com"
    },

]

function menuUsuario() {
    const elementosMenu = [
        "Registrar una nueva mascota",
        "Ver la lista de todas las mascotas por el momento",
        "Ver una lista con todos los dueño",
        "Buscar una mascota por el nombre",
        "Filtrar y luego mostrar todas las mascotas pertenecientes al mismo dueño",
        "Actualizar la informacion de una mascota existente",
        "Eliminar una mascota del array",
    ]
    console.log("[MENU]".padStart(30, " "))
    elementosMenu.forEach((elementoMenu, index) => {
        console.log(String(index + 1).padEnd(3, " "), elementoMenu.padStart(15, " "))
    })
}

function registrarMascota(listaDeMascotas) {

    let registrarNombre = () => {
        let nombreMascota = String(prompt("Ingrese el nombre de su mascota"))
        return nombreMascota
    }
    let registrarNombreReturn = registrarNombre()

    let registrarEspecie = () => {
        let especieMascota = String(prompt("Ingrese la especie de su mascota"))
        return especieMascota
    }
    let registrarEspecieReturn = registrarEspecie()

    let registrarRaza = () => {
        let razaMazcota = String(prompt("Ingrese la raza de su mascota"))
        return razaMazcota
    }
    let registrarRazaReturn = registrarRaza()

    let registrarEdad = () => {
        let fechaNacimiento = prompt(`Ingrese la fecha de nacimiento de su mascota en el formato:
YYYY/MM/DD`)
        let fechaNacimientoDate = new Date(fechaNacimiento).getFullYear()
        let fechaActual = new Date().getFullYear()
        let edad = Math.abs(fechaActual - fechaNacimientoDate)
        return edad
    }
    let registrarEdadReturn = registrarEdad()

    let registrarPeso = () => {
        let pesoMascota = Number(prompt("Ingrese el valor nunerico del peso de su mascota"))
        return pesoMascota
    }
    let registrarPesoReturn = registrarPeso()

    let registrarEstado = () => {
        let estadoMascota = Number(prompt(`1.Estable
2.Critico
Escriba el numero de la opcion que describa el estado de su mascota`))
        if (estadoMascota == 1) {
            return "Estable"
        }
        else {
            return "critico"
        }
    }
    let registrarEstadoReturn = registrarEstado()

    let resgistrarNombrePropietario = () => {
        let nombrePropietario = String(prompt("Ingrese su nombre"))
        return nombrePropietario
    }
    let registrarNombrePropietarioReturn = resgistrarNombrePropietario()

    let registrarDocumentoPropietario = () => {
        let documentoPropietario = Number(prompt("Ingrese su documento"))
        return documentoPropietario
    }
    let registrarDocumentoPropietarioReturn = registrarDocumentoPropietario()

    let registrarTelefonoDeContacto = () => {
        let telefonoDeContacto = Number(prompt("Ingrese su telefono de contacto"))
        return telefonoDeContacto
    }
    let registrarTelefonoDeContactoReturn = registrarTelefonoDeContacto()

    let registrarCorreoDelPropietario = () => {
        let correoDelPropietario = String(prompt("Ingrese su correo electronico"))
        return correoDelPropietario
    }
    let registrarCorreoDelPropietarioReturn = registrarCorreoDelPropietario()

    let mascotanueva = {
        nombre: registrarNombreReturn,
        especie: registrarEspecieReturn,
        raza: registrarRazaReturn,
        edad: registrarEdadReturn,
        peso: registrarPesoReturn,
        estado: registrarEstadoReturn,
        "nombre propietario": registrarNombrePropietarioReturn,
        "documento del dueño": registrarDocumentoPropietarioReturn,
        "telefono de contacto": registrarTelefonoDeContactoReturn,
        "correo del propietario": registrarCorreoDelPropietarioReturn
    }
    listaDeMascotas.push(mascotanueva)
}


function VerListaMascotasRegistradas(listaDeMascotas) {
    listaDeMascotas.forEach((ubicacionMascota) => {
        console.log(
            `nombre: ${ubicacionMascota.nombre}
especie: ${ubicacionMascota.especie}
raza: ${ubicacionMascota.raza}
edad: ${ubicacionMascota.edad}
peso: ${ubicacionMascota.peso}
estado: ${ubicacionMascota.estado}
nombre propietario: ${ubicacionMascota["nombre propietario"]}
documento del dueño: ${ubicacionMascota["documento del dueño"]}
telefono de contacto: ${ubicacionMascota["telefono de contacto"]}
correo del propietario: ${ubicacionMascota["correo del propietario"]}
`)
    })
}

function VerListaDeLosDueños(listaDeMascotas) {
    listaDeMascotas.forEach((ubicacionMascota) => {
        console.log(`La mascota: ${ubicacionMascota.nombre} le pertenece al dueño: ${ubicacionMascota["nombre propietario"]}`)
    })
}

function BuscarMascotaPorElNombre(listaDeMascotas) {

    let mascotaBuscada = String(prompt("Ingrese el nombre de la mascota que desee encontrar"))

    let verificacionDeExcistencia = listaDeMascotas.some((mascota) => {
        return mascota.nombre == mascotaBuscada
    })

    if (verificacionDeExcistencia == true) {
        let datosMascota = listaDeMascotas.find(mascota =>
            mascota.nombre == mascotaBuscada)
        console.log("La mascota se encuentra en nuestra lista de mascotas con los siguientes datos:", datosMascota)
    }

    else {
        console.log("La mascota:", mascotaBuscada, "no se encuentra en nuestra lista de mascotas")
    }
}

function FiltrarYMostrarMascotasMismoDueño(listaDeMascotas) {
    let nombreDelDueñoDeLaMascota = String(prompt("Ingrese el nombre de la persona para conocer que mascotas posee"))
    let verificacionExistenciaPersona = listaDeMascotas.some((dueño) => { return dueño["nombre propietario"] == nombreDelDueñoDeLaMascota })

    if (verificacionExistenciaPersona == true) {
        let mascotasDelDueño = listaDeMascotas.filter((ubicacionMascota) => {
            return ubicacionMascota["nombre propietario"] == nombreDelDueñoDeLaMascota
        })
        console.log(mascotasDelDueño)
    }
    else {
        console.log("El dueño no existe")
    }
}



// let opcion = String(prompt("¿Desea ver la lista de mascotas?(si/no)"))
// let opcionAlt = opcion.toLowerCase()

// if (opcionAlt == "si") {
//     VerListaDeLosDueños(mascotas)

//     let seguirProceso = String(prompt("Desea continuar el proceso(si/no)"))
//     let seguirProcesoAlt = seguirProceso.toLowerCase()

//     if (seguirProcesoAlt == "no") {

//     }
//     else {

//     }

// }

function actualizarInformacionMascotaExistente(listaDeMascotas) { }

function actualizarInfo(listaDeMascotas) {
    let nombreMascota = String(prompt("Ingrese el nombre de la mascota"))
    let verificacionExistenciaMascota = listaDeMascotas.some((mascota) => { return mascota.nombre == nombreMascota })

    if (verificacionExistenciaMascota == true) {

            let indiceMascota = listaDeMascotas.findIndex(mascota => mascota.nombre == nombreMascota)

            let informacionACambiar = Number(prompt(`Ingrese el numero que corresponda a la informacion que desea cambiar:
                0. Nombre
                1. Especie
                2. Raza
                3. Edad
                4. peso
                5. Estado
                6. Nombre del propietario
                7. Documento del dueño
                8. Telefono de contacto
                9. Correo del propietario`))

            switch (informacionACambiar) {

                case 0:

                    let nuevoValorNombre = String(prompt("Ingrese el nuevo nombre de la mascota"))
                    listaDeMascotas[indiceMascota].nombre = nuevoValorNombre
                    break;

                case 1:

                    let nuevoValorEspecie = String(prompt("Ingrese la nueva especie de la mascota"))
                    listaDeMascotas[indiceMascota].especie = nuevoValorEspecie
                    break;


                case 2:

                    let nuevoValorRaza = String(prompt("Ingrese la nueva raza de la mascota"))
                    listaDeMascotas[indiceMascota].raza = nuevoValorRaza
                    break;


                case 3:

                    let registrarEdad = () => {
                        let fechaNacimiento = prompt(`Ingrese la fecha de nacimiento de su mascota en el formato:
                    YYYY/MM/DD`)
                        let fechaNacimientoDate = new Date(fechaNacimiento).getFullYear()
                        let fechaActual = new Date().getFullYear()
                        let edad = Math.abs(fechaActual - fechaNacimientoDate)
                        return edad
                    }
                    let registrarEdadReturn = registrarEdad()
                    listaDeMascotas[indiceMascota].edad = registrarEdadReturn
                    break;


                case 4:

                    let nuevoValorPeso = Number(prompt("Ingrese el numero correspondiente al valor de peso de su mascota"))
                    listaDeMascotas[indiceMascota].peso = nuevoValorPeso
                    break;


                case 5:

                    let registrarEstado = () => {
                        let estadoMascota = Number(prompt(
`1.Estable
2.Critico
Escriba el numero de la opcion que describa el estado de su mascota`))
                        if (estadoMascota == 1) {
                            return "Estable"
                        }
                        else {
                            return "critico"
                        }
                    }

                        let registrarEstadoReturn1 = registrarEstado()

                    listaDeMascotas[indiceMascota].registrarEstadoReturn1
                    break;


                case 6:

                    let nuevoValorNombrePropietario = String(prompt("Ingrese el nuevo nombre del propietario"))
                    listaDeMascotas[indiceMascota]["nombre propietario"] = nuevoValorNombrePropietario
                    break;


                case 7:

                    let nuevoValorDocumentoDelDueño = Number(prompt("Ingrese el nuevo documento del dueño"))
                    listaDeMascotas[indiceMascota]["documento del dueño"] = nuevoValorDocumentoDelDueño
                    break;

                case 8:

                    let nuevoValorTelefonoDeContacto = String(prompt("Ingrese el nuevo telefono de contacto"))
                    listaDeMascotas[indiceMascota]["telefono de contacto"] = nuevoValorTelefonoDeContacto
                    break;

                case 9:

                    let nuevoValorCorreoDelPropietario = String(prompt("Ingrese la nueva raza de la mascota"))
                    listaDeMascotas[indiceMascota]["correo del propietario"] = nuevoValorCorreoDelPropietario
                    break;

                default:
                    console.log("El valor escrito no corresponde a ninguna opcion")
                    break;
            }

    }
    else {
        console.log("La mascota no existe")
    }
}


actualizarInfo(mascotas)
console.log(mascotas)
