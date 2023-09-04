alert("Buen provecho");
alert("Bienvenidos al restaurant");
var entrada=parseInt(prompt("Ingrese el precio de la entrada"))
var segundo=parseInt(prompt("Ingrese el precio del segundo"))
var postre=parseInt(prompt("Ingrese el precio del postre"))
var total=entrada+segundo+postre
var igv=(total*0.18)+total
console.log("El precio de la entrada es:",entrada)
console.log("El precio del plato segundo es:",segundo)
console.log("El precio del postre es:",postre)
console.log("El total es:",total)
console.log("El precio total incluido igv es:",igv)
