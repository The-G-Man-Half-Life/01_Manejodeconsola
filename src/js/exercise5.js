let edad = parseInt(prompt("Ingrese su edad: "))

if (edad < 18){
    console.warn("Usted es menor de edad")
}
else if (edad>=18 & edad<=24 ){
    console.error("Terrible master ya entraste a la juventud hora de chambear")
}
else{
    console.log("Ya es hora de que vayas preaparando tu testamento anciano")
}