// const myFirstNumber = 2
// let mySecondNumber = parseFloat("2.01")

// document.write(myFirstNumber)

// console.info(myFirstNumber*mySecondNumber)
// console.info(myFirstNumber-mySecondNumber)
// console.info(myFirstNumber/mySecondNumber)
// console.info(myFirstNumber+mySecondNumber)

// console.info(typeof(myFirstNumber+mySecondNumber), myFirstNumber+mySecondNumber)
// // console.info(Number.isInteger(mySecondNumber))

// const number1 = 5_000_000_000_000_000_000
// const number2 = 5_000_000_000_000_000_000
// const number3 = 85
// const number4 = number1**number2

// console.info(number1+number2)
// console.info(number1-number2)
// console.info(number1*number2)
// console.info(number1/number2)

// console.info(Number.isFinite(number3))
// console.info(Number.isFinite(number4))
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)
// console.info(Number.MIN_SAFE_INTEGER)
// console.info(Number.MAX_SAFE_INTEGER)

// const exampleNumber = 84
// console.info(exampleNumber)
// console.info((exampleNumber).toExponential(5))
// let number =exampleNumber
// console.info(exampleNumber.toString(8))
// console.info(exampleNumber.toString(16))

// const example = 5.12
// document.write(example)
// console.info(example.toFixed(1))
// console.info(example.toFixed(2))
// console.info(example.toFixed(3))
// console.info(example.toFixed())
// console.info(example.toFixed(100))

// const numeroParaRedondear = 3.501
// document.write(numeroParaRedondear)

// console.log(Math.round(numeroParaRedondear)) //a partir del 5 redondea hacia arriba y por debajo del 4 redondea hacia abajo
// console.log(Math.ceil(numeroParaRedondear)) //redondea el numero al que le sigue independiente de que tan pequeño sea el valor del decimal
// console.log(Math.floor(numeroParaRedondear)) //redondea el numero siempre hacia el sucesor inferior
// console.info(Math.trunc(numeroParaRedondear)) //elimina la parte decimal sin cambiar el valor del entero
// console.info(Number.parseInt(numeroParaRedondear))
// console.info(Number.parseFloat(numeroParaRedondear))

// opcion uno
// const numeroAleatorio = Math.round(Math.random()*2 )
// document.write(numeroAleatorio)

//opcion tres 
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
document.write(getRandomIntInclusive(50,49))

// opcion dos 
// const numeroAleatorioEnRango = Math.round(Math.random()*(50-100)+100)
// document.write(numeroAleatorioEnRango)

//clase math y sus metodos mas usados 

