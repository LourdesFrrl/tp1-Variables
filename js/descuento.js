const precio = parseFloat(prompt("ingrese el precio del producto"));
if(precio>=1000){
    document.writeln("<br> El precio del producto con el 15% de descuento es: ", precio - (precio * 0,15));
 } 
 else{
    document.writeln("No le corresponde descuento. El precio final es: ", precio)
 }


