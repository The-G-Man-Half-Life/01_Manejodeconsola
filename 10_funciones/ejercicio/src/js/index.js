//nombre:Mateo Montoya Ospina
//clan:Gates
//Dia de inicio: 26 de Abril de 2024

//lista en donde guardo las mascotas
let mascotas = [

    {
        nombre: "Luna",
        especie: "Perro",
        raza: "Pastor Belga Malinois",
        edad: new Date('2021/01/10'),
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
        edad: new Date('2019/03/15'),
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
        edad: new Date('2022/07/20'), peso: 4,
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
        edad: new Date('2023/04/05'),
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
        edad: new Date('2020/09/30'),
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
        edad: new Date('2018/11/25'),
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
        edad: new Date('2023/02/12'),
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
        edad: new Date('2016/08/08'),
        peso: 2,
        estado: "Critico",
        "nombre propietario": "Pablo Gómez",
        "documento del dueño": 7788990011,
        "telefono de contacto": 555_8901_2345,
        "correo del propietario": "pablo_gomez@amongus.com"
    },

    {
        nombre: "Daisy",
        especie: "Hurón", raza: "Hurón europeo"
        , edad: new Date('2022/05/03')
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
        , edad: new Date('2021/12/18')
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
registrarMascota(mascotas)

console.log(mascotas)