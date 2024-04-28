//nombre:Mateo Montoya Ospina
//clan:Gates
//Dia de inicio: 26 de Abril de 2024

//lista en donde guardo las mascotas
let mascotas = [

    {
        nombre: "luna",
        especie: "perro",
        raza: "astor belga malinois",
        edad: 5,
        peso: 25,
        estado: "Estable",
        "nombre propietario": "maría garcía",
        "documento del dueño": 1122334455,
        "telefono de contacto": 555_1234_5678,
        "correo del propietario": "maria_garcia@amogus.com"
    },

    {
        nombre: "max",
        especie: "gato",
        raza: "sphynx",
        edad: 6,
        peso: 7,
        estado: "Critico",
        "nombre propietario": "alejandro martínez",
        "documento del dueño": 2233445566,
        "telefono de contacto": 555_2345_6789,
        "correo del propietario": "alejandro_martinez@amogus.com"
    },

    {
        nombre: "bella",
        especie: "conejo",
        raza: "angora",
        edad: 3,
        peso: 4,
        estado: "Estable",
        "nombre propietario": "sofía rodríguez",
        "documento del dueño": 3344556677,
        "telefono de contacto": 555_3456_7890,
        "correo del propietario": "sofia_rodrigue@amogus.com"
    },

    {
        nombre: "rocky",
        especie: "hurón",
        raza: "hurón de patas negras",
        edad: 2,
        peso: 12,
        estado: "Critico",
        "nombre propietario": "carlos lópez",
        "documento del dueño": 4455667788,
        "telefono de contacto": 555_4567_8901,
        "correo del propietario": "carloz_lopez@amongus.com"
    },

    {
        nombre: "coco",
        especie: "perico",
        raza: "cotorra Argentina",
        edad: 4,
        peso: 0.5,
        estado: "Estable",
        "nombre propietario": "ana pérez",
        "documento del dueño": 5566778899,
        "telefono de contacto": 555_5678_9012,
        "correo del propietario": "ana_perez@amongus.com"
    },

    {
        nombre: "simba",
        especie: "serpiente",
        raza: "pitón real",
        edad: 7,
        peso: 3,
        estado: "Critico",
        "nombre propietario": "andrea ruiz",
        "documento del dueño": 6677889900,
        "telefono de contacto": 555_6789_0123,
        "correo del propietario": "juan_hernandez@amongus.com"
    },

    {
        nombre: "lola",
        especie: "cerdo",
        raza: "mini cerdo Vietnamita",
        edad: 6,
        peso: 15,
        estado: "Estable",
        "nombre propietario": "laura díaz",
        "documento del dueño": 7788990011,
        "telefono de contacto": 555_7890_1234,
        "correo del propietario": "laura_diaz@amongus.com"
    },

    {
        nombre: "toby",
        especie: "tortuga",
        raza: "tortuga de orejas rojas",
        edad: 3,
        peso: 2,
        estado: "Critico",
        "nombre propietario": "pablo gómez",
        "documento del dueño": 7788990011,
        "telefono de contacto": 555_8901_2345,
        "correo del propietario": "pablo_gomez@amongus.com"
    },

    {
        nombre: "daisy",
        especie: "hurón",
        raza: "hurón europeo"
        , edad: 3
        , peso: 8,
        estado: "critico",
        "nombre propietario": "andrea ruiz",
        "documento del dueño": 9900112233,
        "telefono de contacto": 555_9012_3456,
        "correo del propietario": "andrea_ruiz@amongus.com"
    },

    {
        nombre: "charlie",
        especie: "conejo"
        , raza: "conejo cabeza de león"
        , edad: 2
        , peso: 6,
        estado: "critico"
        , "nombre propietario": "david fernández",
        "documento del dueño": 9911223344,
        "telefono de contacto": 555_0123_4567,
        "correo del propietario": "david_fernandez@amongus.com"
    },

]

//con esto separo los elementos en la consola y asi no se ven apeñuscados
function desplegarEspaciadoTactico(){
    console.log(`
    
    
    
    
    
    `)
}

//con esto saco el menu
function desplegarMenuUsuario() {
    const elementosMenu = [
        "Registrar una nueva mascota",
        "Ver la lista de todas las mascotas por el momento",
        "Ver una lista con todos los dueño",
        "Buscar una mascota por el nombre",
        "Filtrar y luego mostrar todas las mascotas pertenecientes al mismo dueño",
        "Actualizar la informacion de una mascota existente",
        "Eliminar una mascota del array",
        "Salir del programa"
    ]
    console.log("[MENU]".padStart(30, " "))
    elementosMenu.forEach((elementoMenu, index) => {
        console.log(String(index + 1).padEnd(3, " "), elementoMenu.padStart(15, " "))
    })
    let opcion = Number(prompt("Ingrese el numero de la opcion que desee ejecutar"))
    return opcion
}

//con esto se crea una nueva mascota en el array
function registrarMascota(listaDeMascotas) {

    let registrarNombre = () => {
        let nombreMascota = String(prompt("Ingrese el nombre de su mascota"))
        return nombreMascota.toLowerCase()
    }
    let registrarNombreReturn = registrarNombre()

    let registrarEspecie = () => {
        let especieMascota = String(prompt("Ingrese la especie de su mascota"))
        return especieMascota.toLowerCase()
    }
    let registrarEspecieReturn = registrarEspecie()

    let registrarRaza = () => {
        let razaMazcota = String(prompt("Ingrese la raza de su mascota"))
        return razaMazcota.toLowerCase()
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
        return nombrePropietario.toLowerCase()
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

//muestra todas las mascotas registradas y sus datos
function verListaMascotasRegistradas(listaDeMascotas) {
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

//con esto se muestran las mascotas y su dueño
function verListaDeLosDueños(listaDeMascotas) {
    listaDeMascotas.forEach((ubicacionMascota) => {
        console.log(`La mascota: ${ubicacionMascota.nombre} le pertenece al dueño: ${ubicacionMascota["nombre propietario"]}`)
    })
}

//Buscador de mascotas por nombre
function buscarMascotaPorElNombre(listaDeMascotas) {

    let mascotaBuscada = String(prompt("Ingrese el nombre de la mascota que desee encontrar"))
    let mascotaBuscadaAlt = mascotaBuscada.toLowerCase()
    let verificacionDeExcistencia = listaDeMascotas.some((mascota) => {
        return mascota.nombre == mascotaBuscadaAlt
    })

    if (verificacionDeExcistencia == true) {
        let datosMascota = listaDeMascotas.find(mascota =>
            mascota.nombre == mascotaBuscadaAlt)
        console.log(`La mascota se encuentra dentro de la lista con los datos: 
nombre: ${datosMascota.nombre}
especie: ${datosMascota.especie}
raza: ${datosMascota.raza}
edad: ${datosMascota.edad}
peso: ${datosMascota.peso}
estado: ${datosMascota.estado}
nombre propietario: ${datosMascota["nombre propietario"]}
documento del dueño: ${datosMascota["documento del dueño"]}
telefono de contacto: ${datosMascota["telefono de contacto"]}
correo del propietario: ${datosMascota["correo del propietario"]}`)
    }

    else {
        console.log("La mascota:", mascotaBuscadaAlt, "no se encuentra en nuestra lista de mascotas")
    }
}

//con esto se muestran las mascotas correspondientes a un dueño
function filtrarYMostrarMascotasMismoDueño(listaDeMascotas) {
    let nombreDelDueñoDeLaMascota = String(prompt("Ingrese el nombre de la persona para conocer que mascotas posee"))
    let nombreDelDueñoDeLaMascotaAlt = nombreDelDueñoDeLaMascota.toLowerCase()
    let verificacionExistenciaPersona = listaDeMascotas.some((dueño) => { return dueño["nombre propietario"] == nombreDelDueñoDeLaMascotaAlt })

    if (verificacionExistenciaPersona == true) {
        let mascotasDelDueño = listaDeMascotas.filter((ubicacionMascota) => {
            return ubicacionMascota["nombre propietario"] == nombreDelDueñoDeLaMascotaAlt
        })
       mascotasDelDueño.forEach((mascota,index)=>{
        console.log(
`Mascota N° ${index+1}
nombre: ${mascota.nombre}
especie: ${mascota.especie}
raza: ${mascota.raza}
edad: ${mascota.edad}
peso: ${mascota.peso}
estado: ${mascota.estado}
nombre propietario: ${mascota["nombre propietario"]}
documento del dueño: ${mascota["documento del dueño"]}
telefono de contacto: ${mascota["telefono de contacto"]}
correo del propietario: ${mascota["correo del propietario"]}
`)
       })
    }
    else {
        console.log("El dueño no existe")
    }
}

//Con esto se actualiza informacion de mascotas ya vigentes
function actualizarInformacionDeMascotaExistente(listaDeMascotas) {
    let nombreMascota = String(prompt("Ingrese el nombre de la mascota"))
    let nombreMascotaAlt = nombreMascota.toLowerCase()
    let verificacionExistenciaMascota = listaDeMascotas.some((mascota) => { return mascota.nombre == nombreMascotaAlt })

    if (verificacionExistenciaMascota == true) {

        let indiceMascota = listaDeMascotas.findIndex(mascota => mascota.nombre == nombreMascotaAlt)

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
                let nuevoValorNombreAlt = nuevoValorNombre.toLowerCase()
                listaDeMascotas[indiceMascota].nombre = nuevoValorNombreAlt
                break;

            case 1:

                let nuevoValorEspecie = String(prompt("Ingrese la nueva especie de la mascota"))
                let nuevoValorEspecieAlt  = nuevoValorEspecie.toLowerCase()
                listaDeMascotas[indiceMascota].especie = nuevoValorEspecieAlt
                break;


            case 2:

                let nuevoValorRaza = String(prompt("Ingrese la nueva raza de la mascota"))
                let nuevoValorRazaAlt = nuevoValorRaza.toLowerCase()
                listaDeMascotas[indiceMascota].raza = nuevoValorRazaAlt
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

                let registrarEstadoReturnAlt = registrarEstado()

                listaDeMascotas[indiceMascota].estado = registrarEstadoReturnAlt
                break;


            case 6:

                let nuevoValorNombrePropietario = String(prompt("Ingrese el nuevo nombre del propietario"))
                let nuevoValorNombrePropietarioAlt = nuevoValorNombrePropietario.toLowerCase() 
                listaDeMascotas[indiceMascota]["nombre propietario"] = nuevoValorNombrePropietarioAlt
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

                let nuevoValorCorreoDelPropietario = String(prompt("Ingrese el nuevo correo del propietario"))
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

//con esto se elimina objetos del array de mascotas
function eliminarMascotaDeLista(listaDeMascotas) {
    let nombreMascota = String(prompt("Ingrese el nombre de la mascota que desee eliminar"))
    let nombreMascotaAlt = nombreMascota.toLowerCase()
    let verificacionExistenciaMascota = listaDeMascotas.some((mascota) => { return mascota.nombre == nombreMascotaAlt })

    if (verificacionExistenciaMascota == true) {

        let indiceMascota = listaDeMascotas.findIndex(mascota => mascota.nombre == nombreMascotaAlt)

        listaDeMascotas.splice(indiceMascota,1)

        console.log("La mascota ha sido eliminada")

    }
    else {
        console.log("La mascota no existe")
    }
}

//con esto se activan todas las funciones
function ejecucionTotal(listaDeMascotas) {
    let bandera = true
    while (bandera == true) {
        let opcionEscogida = desplegarMenuUsuario()
        desplegarEspaciadoTactico()
        switch (opcionEscogida) {
            case 1:
                registrarMascota(listaDeMascotas)
                desplegarEspaciadoTactico()
                bandera = true
                break;

            case 2:
                verListaMascotasRegistradas(listaDeMascotas)
                desplegarEspaciadoTactico()
                bandera = true
                break;

            case 3:
                verListaDeLosDueños(listaDeMascotas)
                desplegarEspaciadoTactico()
                bandera = true
                break;

            case 4:
                buscarMascotaPorElNombre(listaDeMascotas)
                desplegarEspaciadoTactico()
                bandera = true
                break;

            case 5:
                filtrarYMostrarMascotasMismoDueño(listaDeMascotas)
                desplegarEspaciadoTactico()
                bandera = true
                break;

            case 6:
                actualizarInformacionDeMascotaExistente(listaDeMascotas)
                desplegarEspaciadoTactico()
                bandera = true
                break;

            case 7:
                eliminarMascotaDeLista(listaDeMascotas)
                desplegarEspaciadoTactico()
                bandera = true
                break;

            case 8:
                console.log("Hasta la proxima")
                desplegarEspaciadoTactico()
                bandera = false
                break;

            default:
                console.log("Escribe un numero que este dentro de las opciones")
                desplegarEspaciadoTactico()
                bandera= true
                break;
        }
    }
}

ejecucionTotal(mascotas)