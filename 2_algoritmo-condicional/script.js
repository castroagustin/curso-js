let number = Number(prompt('Ingrese un número'));

if(number > 1000){
    alert('El número ' + number + ' es mayor a 1000');
}else{
    alert('El número ' + number + ' es menor a 1000');
}

let text = prompt('Ingrese un texto');

if(text === 'Hola'){
    console.log('El texto ingresado es: "' + text +'"');
}else{
    console.log('El texto ingresado: "' + text + '" es distinto de "Hola"');
}

let number2 = prompt('Ingrese un número');

if(number2 >= 10 && number2 <= 50){
    alert('El número ' + number2 + ' está entre 10 y 50');
}else{
    alert('El número ' + number2 + ' NO está entre 10 y 50');
}