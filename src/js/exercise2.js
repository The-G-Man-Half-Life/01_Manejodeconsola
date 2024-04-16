// ejercicio 2
// variables
let fruits = ["orange","tangerine","lemon","lime","grapefruit","watermelon","melon","peach","apple","strawberry"]
let citricFruits = ["orange","tangerine","lemon","lime","grapefruit"]
let noCitricFruits = ["watermelon","melon","peach","apple","strawberry"]

// ciclo for para llamar los elelementos
for (let i in fruits ) {
      console.log(fruits[i]);
 }
//  llamada de las listas extras
console.log("")
console.table(citricFruits)
console.table(noCitricFruits)
