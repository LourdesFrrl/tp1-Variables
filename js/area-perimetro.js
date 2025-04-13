let base, altura, perimetro, area 
base = parseFloat(prompt("ingrese la base de su rectangulo"));
altura = parseFloat(prompt("ingrese la altura de su rectangulo"));
perimetro = 2 * (base + altura)
area = base * altura
document.writeln("<br> El area su resctangulo es: ", area);
document.writeln("<br> El perimetro su resctangulo es: ", perimetro);