console.groupCollapsed("mini practica")
const listaUser = ["names", "edad"]
const user = {
    names: { juan: ["amogus", "enemy", "baka"], json: "sus", yerson: "copilot", yeimi: "antitesis" },
    edad: 30
}
// let numero = String(prompt("Ingrese un numero"))
console.log(user[listaUser[0]])

console.groupEnd()

console.groupCollapsed("programming without objects")
const fullname = "Mateo Montoya Ospina"
const email = "mateomoospina@gmail.com"
const fullname2 = "Maria Jose Pino"
const email2 = "majopino@gmail.com"

function saludar() {
    console.log(`Hola mundo soy ${fullname} y este es mi correo: ${email}`)
}

function saludar2() {
    console.log(`Hola mundo soy ${fullname2} y este es mi correo: ${email2}`)
}

console.log(fullname);
console.log(email);
saludar()

console.log(fullname2)
console.log(email2);
saludar2()

console.groupEnd()

console.groupCollapsed("programming with objects")
const coderRiwi = {
    name: "Mateo",
    lastName: "Montoya Ospina",
    birthDate: new Date("2006-10-26 6:00:00"),
    rh: "0+",
    address: {
        country: "Colombia",
        state: "Valle de Aburra",
        city: "Medellin",
        neighboorhood: "Belen las playas",
        address: "Calle 12 #71a 34",
        postalCode: "050030"
    },
    phone: "3052992844",
    skills: ["python", "HTML5", "CSS", "EcmaScript"],
    email: ["mateomoospina@gmail.com", "pedrito@gmail.com"],
    clan: "Gates",
    // si yo llamo una variable con un this el cual no este dentro del mismo nivel o un nivel arriba de la variable a la cual llamo me retorna un undefined
    saludar: function () {
        console.log(`Hola mundo soy ${this.name} ${this.lastName} este es mi correo ${this.email[0]}`);
    }
}

//pulling out information from an object
console.log(coderRiwi.name)//metodo 1
console.log(coderRiwi[`name`]);//metodo 2
console.log(coderRiwi.address);
console.log(coderRiwi[`address`]);
console.log(coderRiwi.skills[2])
//puedes llamar un metodo de la misma manera tantas veces quieras mientras que este se encuentre dentro de distintos objetos o uno este en el codigo normal y los demas esten dentro de los objetos
//console.log(coderRiwi.saludar);//nunca usar  este metodo
coderRiwi.saludar()//forma 2 para llamar metdos
saludar()
console.groupEnd()

console.groupCollapsed("Adding information to an object")
console.log(coderRiwi)

//adding info
console.log("Adding")

coderRiwi["typeDocument"] = "Tarjeta de Identidad"
coderRiwi.identificationNumber = "1011395428"
coderRiwi.address.Continente = "SurAmerica"
coderRiwi.skills.push("SQL")
console.warn("")
console.log(coderRiwi)

//defining properties
Object.defineProperty(coderRiwi, "clan", {
    value: "Linux",
    writable: true, //permite modificar la propiedad
    enumerable: true, //permite que la propiedad aparezca
    configurable: true //permite que la propiedad sea eliminada
})

//metodo 0 para agregar multiples claves valores
Object.assign(coderRiwi, {
    contactName: "Blanca Ines Ospina Marin",
    phoneNumber: 3137258608,
    optionalPhoneNumber: 3137347137
})

//metodo 1 para agregar un objeto con multiples elementos
coderRiwi.emergencyContact = {
    contactName: "Blanca Ines Ospina Marin",
    phoneNumber: 3137258608,
    optionalPhoneNumber: 3137347137
}

//metodo 2 para agregar un objeto con multiples elementos
Object.defineProperty(coderRiwi, "emergencyContact", {
    value: {
        contactName: "Blanca Ines Ospina Marin",
        phoneNumber: 3137258608,
        optionalPhoneNumber: 3137347137
    },
    writable: true,
    enumerable: true,
    configurable: true
})

//eliminar elementos

delete coderRiwi.clan
coderRiwi.clan = undefined
console.groupEnd()

console.groupCollapsed("sum objects")
const obj1 = {
    a: "uno",
}
const obj2 = {
    b: "dos",
}
const obj3 = {
    a: "uno",
}
const obj4 = {
    b: "dos",
}

const sumObjects = Object.assign(obj1, obj2)// de esta manera asigno los elementos de obj2 a obj1 ademas de crear un nuevo objeto con ambos elementos de ambos objetos
console.log(sumObjects);
console.log(obj1)
console.log(obj2)

console.error("Line breaker hahaha")

const sumObjects2 = { ...obj3, ...obj4 }
console.log(sumObjects2)
console.log(obj3)
console.log(obj4)

console.groupEnd()

console.groupCollapsed("destructuring objects")
const objectExampleOne = {
    userName: "The G-Man",
    userEmail: "mateomoospina@gmail.com",
    userRole: "administrator",
    userPassword: "amogus124"

}

//forma manual
// const userName = objectExampleOne.userName
// const userEmail = objectExampleOne.userEmail
// const userPassword = objectExampleOne.userPassword

//forma tactica
let { userName, userEmail, userPassword } = objectExampleOne

console.log(userName)
console.log(userEmail)
console.log(userPassword)

//sacar informacion con nombre diferente}
let { userName: user1,
    userEmail: emailExtraido,
    userpassword: password
} = objectExampleOne
console.log(user1)
console.log(emailExtraido)
console.log(password)

let {
    name: nameCoder, 
    lastName, 
    address:{
        city: ciudad
    },
    email: emailCoder
} = coderRiwi

console.log("Nombre:",nameCoder);
console.log("Apellido:",lastName);
console.log("Direccion:",ciudad);
console.log("Email:",emailCoder)


console.groupEnd()