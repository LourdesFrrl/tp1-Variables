const numero1= parseInt(prompt("Ingrese el primer numero"))
const numero2= parseInt(prompt("Ingrese el segundo numero"))
const numero3= parseInt(prompt("Ingrese el tercer numero"))
if (numero1 >= numero2 && numero1 >= numero3) {
    document.writeln(`El ${numero1} es el número más grande`);
} else if (numero2 >= numero1 && numero2 >= numero3) {
    document.writeln(`El ${numero2} es el número más grande`);
} else {
    document.writeln(`El ${numero3} es el número más grande`);
}

