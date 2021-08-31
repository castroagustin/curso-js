let numeroAlumnos = parseInt(prompt('Ingrese el numero de ALUMNOS'));
let notasFinal = '';

for(let i = 1; i <= numeroAlumnos; i++){
    let notaAlumno = parseInt(prompt('Ingrese la nota del ALUMNO ' + i));
    notasFinal += 'ALUMNO '+ i + ': ' + notaAlumno + '\n';
}

alert('NOTAS: \n' + notasFinal);