const numeroAleatorio = Math.floor(Math.random() * (10-1+1) +1);
console.log(numeroAleatorio);

let numeroUsuario = Number(prompt("Ingrese un numero: ")); 

while(numeroAleatorio !== numeroUsuario){
    if(numeroAleatorio<numeroUsuario){
        console.warn("El numero es menor")        
    }
    else if (numeroAleatorio>numeroUsuario){
        console.warn("El numero es mayor");
    }

    else{
        console.log("Ganaste, los numeros son iguales");
        alert("Ganaste")
        break;
    }

    numeroUsuario = Number(prompt("Ingrese un numero: "));
}
