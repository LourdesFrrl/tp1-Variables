const palabra = prompt("Escribí una palabra de 6 letras:");
if (palabra.length === 6) {
    let vocales = ""
    let letra0 = palabra.charAt(0).toLowerCase();
    let letra1 = palabra.charAt(1).toLowerCase();
    let letra2 = palabra.charAt(2).toLowerCase();
    let letra3 = palabra.charAt(3).toLowerCase();
    let letra4 = palabra.charAt(4).toLowerCase();
    let letra5 = palabra.charAt(5).toLowerCase();

    if (letra0 === "a" || letra0 === "e" || letra0 === "i" || letra0 === "o" || letra0 === "u") {
        vocales += letra0;
    }
    if (letra1 === "a" || letra1 === "e" || letra1 === "i" || letra1 === "o" || letra1 === "u") {
        vocales += letra1;
    }
    if (letra2 === "a" || letra2 === "e" || letra2 === "i" || letra2 === "o" || letra2 === "u") {
        vocales += letra2;
    }
    if (letra3 === "a" || letra3 === "e" || letra3 === "i" || letra3 === "o" || letra3 === "u") {
        vocales += letra3;
    }
    if (letra4 === "a" || letra4 === "e" || letra4 === "i" || letra4 === "o" || letra4 === "u") {
        vocales += letra4;
    }
    if (letra5 === "a" || letra5 === "e" || letra5 === "i" || letra5 === "o" || letra5 === "u") {
        vocales += letra5;
    }

    document.writeln("Las vocales de la palabra son: " + vocales);
} else {
    document.writeln("Por favor, escribí una palabra de al menos 6 letras.");
}
