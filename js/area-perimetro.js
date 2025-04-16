const base = parseFloat(prompt("ingrese la base de su rectangulo"));
const altura = parseFloat(prompt("ingrese la altura de su rectangulo"));
const perimetro = 2 * (base + altura)
const area = base * altura
document.writeln("El area su resctangulo es: ", area);
document.writeln("<br> El perimetro su resctangulo es: ", perimetro);