const numero = parseInt(prompt("Ingrese un numero"))
const modulo = numero % 2
if(modulo==0){
    document.writeln("El numero ", numero ," es par")
}
else{
    document.writeln("El numero ", numero ," es impar")
}
