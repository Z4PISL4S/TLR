var resultado = document.getElementById('resultado');
var registro = document.getElementById('registro');

function asignar(valor) {
    resultado.value += valor;
}

function limpiar() {
    resultado.value = '';
}

function calcular() {
    try {
        resultado.value = eval(resultado.value);
        registro.innerHTML += `<li class='list-group-item'> ${resultado.value} </li>`;
    } catch (error) {
        resultado.value = 'Error';
    }
}

function potencia() {
    resultado.value = Math.pow(eval(resultado.value), 2);
}

function logaritmoNatural() {
    resultado.value = Math.log(eval(resultado.value));
}

function seno() {
    resultado.value = Math.sin(eval(resultado.value));
}

function raizCuadrada() {
    resultado.value = Math.sqrt(eval(resultado.value));
}

function eliminarResultado() {
    resultado.value = '';
}

// Funciones adicionales de una calculadora científica

function coseno() {
    resultado.value = Math.cos(eval(resultado.value));
}

function tangente() {
    resultado.value = Math.tan(eval(resultado.value));
}

function exponencial() {
    resultado.value = Math.exp(eval(resultado.value));
}

function factorial() {
    var num = eval(resultado.value);
    var fact = 1;
    for (var i = 1; i <= num; i++) {
        fact *= i;
    }
    resultado.value = fact;
}

function pi() {
    resultado.value = Math.PI;
}

function e() {
    resultado.value = Math.E;
}