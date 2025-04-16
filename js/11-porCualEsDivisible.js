const numero = parseInt(prompt("Ingrese un número"));
let mensaje = `El ${numero} es divisible por `;
let divisores = "";

if (numero % 2 === 0) {
    divisores += "2";
}

if (numero % 3 === 0) {
    if (divisores !== "") {
        divisores += " y por 3";
    } else {
        divisores += "3";
    }
}

if (numero % 5 === 0) {
    if (divisores !== "") {
        divisores += " y por 5";
    } else {
        divisores += "5";
    }
}

if (numero % 7 === 0) {
    if (divisores !== "") {
        divisores += " y por 7";
    } else {
        divisores += "7";
    }
}

if (divisores !== "") {
    document.writeln(mensaje + divisores + ".");
} else {
    document.writeln(`El ${numero} no es divisible por 2, 3, 5 ni 7.`);
}
