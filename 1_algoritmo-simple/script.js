let peso = Number(prompt('Ingrese su peso en kg'));
let altura = Number(prompt('Ingrese su altura en mts'));

let imc = (peso / (altura * altura)).toFixed(1);

alert('su IMC es de: ' + imc);
