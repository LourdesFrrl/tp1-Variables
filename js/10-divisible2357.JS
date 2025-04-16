const numero = parseInt(prompt("Ingrese un número"));
if(!isNaN(numero)){
    if (numero % 2 === 0) {
        document.writeln(`${numero} es divisible por 2`);
    } else if (numero % 3 === 0) {
        document.writeln(`${numero} es divisible por 3`);
    } else if (numero % 5 === 0) {
        document.writeln(`${numero} es divisible por 5`);
    } else if (numero % 7 === 0) {
        document.writeln(`${numero} es divisible por 7`);
    } else {
        document.writeln(`${numero} no es divisible por 2, 3, 5 ni 7`);
    }
} else{
    document.writeln("ingresaste un valor invalido")
}

